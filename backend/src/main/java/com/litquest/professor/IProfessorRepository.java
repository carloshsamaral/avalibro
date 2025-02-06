package com.litquest.professor;

import org.springframework.data.jpa.repository.JpaRepository;

public interface IProfessorRepository extends JpaRepository<Professor, String> {

    boolean existsByEmail(String email);
}
