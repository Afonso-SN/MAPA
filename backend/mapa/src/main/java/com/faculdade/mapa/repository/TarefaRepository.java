package com.faculdade.mapa.repository;

import com.faculdade.mapa.model.Tarefa;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface TarefaRepository extends JpaRepository<Tarefa, Long> {
    // Lista apenas as tarefas pertencentes ao usuário logado
    List<Tarefa> findByUsuarioId(Long usuarioId);
}
