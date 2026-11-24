package main.java.com.faculdade.mapa.controller;

import com.faculdade.mapa.dto.TarefaRequest;
import com.faculdade.mapa.model.Tarefa;
import com.faculdade.mapa.model.Usuario;
import com.faculdade.mapa.repository.TarefaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tarefas")
public class TarefaController {

    private final TarefaRepository tarefaRepository;

    public TarefaController(TarefaRepository tarefaRepository) {
        this.tarefaRepository = tarefaRepository;
    }

    @GetMapping
    public List<Tarefa> listar(Authentication auth) {
        Usuario usuario = (Usuario) auth.getPrincipal();
        return tarefaRepository.findByUsuarioIdOrderByIdDesc(usuario.getId());
    }

    @PostMapping
    public ResponseEntity<Tarefa> criar(@RequestBody TarefaRequest dados, Authentication auth) {
        Usuario usuario = (Usuario) auth.getPrincipal();

        Tarefa nova = new Tarefa();
        nova.setTitulo(dados.titulo());
        nova.setDisciplina(dados.disciplina());
        nova.setAnotacao(dados.anotacao());
        nova.setConcluida(false);
        nova.setUsuario(usuario);

        return ResponseEntity.ok(tarefaRepository.save(nova));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Tarefa> atualizar(@PathVariable Long id,
                                            @RequestBody TarefaRequest dados,
                                            Authentication auth) {
        Usuario usuario = (Usuario) auth.getPrincipal();

        return tarefaRepository.findById(id)
                .filter(t -> t.getUsuario().getId().equals(usuario.getId()))
                .map(tarefa -> {
                    tarefa.setTitulo(dados.titulo());
                    tarefa.setDisciplina(dados.disciplina());
                    tarefa.setAnotacao(dados.anotacao());
                    tarefa.setConcluida(dados.concluida());
                    return ResponseEntity.ok(tarefaRepository.save(tarefa));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable Long id, Authentication auth) {
        Usuario usuario = (Usuario) auth.getPrincipal();

        return tarefaRepository.findById(id)
                .filter(t -> t.getUsuario().getId().equals(usuario.getId()))
                .map(tarefa -> {
                    tarefaRepository.delete(tarefa);
                    return ResponseEntity.noContent().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}