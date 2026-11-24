package com.faculdade.mapa.repository;

import com.faculdade.mapa.model.Tarefa;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface TarefaRepository extends JpaRepository<Tarefa, Long> {
    List<Tarefa> findByUsuarioIdOrderByIdDesc(Long usuarioId);
}