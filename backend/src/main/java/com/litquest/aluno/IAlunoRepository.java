package com.litquest.aluno;

import org.springframework.data.jpa.repository.JpaRepository;

public interface IAlunoRepository extends JpaRepository<Aluno, String> {

    boolean existsByEmail(String email);
}
