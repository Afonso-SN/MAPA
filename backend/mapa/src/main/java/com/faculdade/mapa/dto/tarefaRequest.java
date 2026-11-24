package main.java.com.faculdade.mapa.dto;

public record TarefaRequest(
    String titulo,
    String disciplina,
    String anotacao,
    boolean concluida
) {}