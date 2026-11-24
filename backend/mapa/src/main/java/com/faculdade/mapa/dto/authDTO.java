package com.faculdade.mapa.dto;

public class AuthDTO {

    public record RegistroRequest(String nome, String email, String senha) {}

    public record LoginRequest(String email, String senha) {}

    public record UsuarioResumo(Long id, String nome, String email) {}

    public record AuthResponse(String token, UsuarioResumo usuario) {}
}