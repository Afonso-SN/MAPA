package main.java.com.faculdade.mapa.controller;

import com.faculdade.mapa.dto.AuthDTO.*;
import com.faculdade.mapa.model.Usuario;
import com.faculdade.mapa.repository.UsuarioRepository;
import com.faculdade.mapa.security.JwtService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthController(UsuarioRepository usuarioRepository,
                          PasswordEncoder passwordEncoder,
                          JwtService jwtService) {
        this.usuarioRepository = usuarioRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    @PostMapping("/cadastro")
    public ResponseEntity<?> cadastrar(@RequestBody RegistroRequest dados) {
        if (dados.nome() == null || dados.nome().isBlank() ||
            dados.email() == null || dados.email().isBlank() ||
            dados.senha() == null || dados.senha().isBlank()) {
            return ResponseEntity.badRequest().body(Map.of("erro", "Preencha todos os campos."));
        }

        String emailLimpo = dados.email().trim().toLowerCase();

        if (usuarioRepository.existsByEmail(emailLimpo)) {
            return ResponseEntity.badRequest().body(Map.of("erro", "Este e-mail já está cadastrado."));
        }

        Usuario novo = new Usuario();
        novo.setNome(dados.nome().trim());
        novo.setEmail(emailLimpo);
        novo.setSenha(passwordEncoder.encode(dados.senha()));

        usuarioRepository.save(novo);

        String token = jwtService.gerarToken(novo);
        return ResponseEntity.ok(new AuthResponse(
                token,
                new UsuarioResumo(novo.getId(), novo.getNome(), novo.getEmail())
        ));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest dados) {
        if (dados.email() == null || dados.senha() == null) {
            return ResponseEntity.badRequest().body(Map.of("erro", "Informe o e-mail e a senha."));
        }

        Usuario usuario = usuarioRepository.findByEmail(dados.email().trim().toLowerCase())
                .orElse(null);

        if (usuario == null || !passwordEncoder.matches(dados.senha(), usuario.getSenha())) {
            return ResponseEntity.status(401).body(Map.of("erro", "E-mail ou senha incorretos."));
        }

        String token = jwtService.gerarToken(usuario);
        return ResponseEntity.ok(new AuthResponse(
                token,
                new UsuarioResumo(usuario.getId(), usuario.getNome(), usuario.getEmail())
        ));
    }
}