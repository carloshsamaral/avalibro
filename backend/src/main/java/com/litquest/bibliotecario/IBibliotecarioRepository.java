package com.litquest.bibliotecario;

import org.springframework.data.jpa.repository.JpaRepository;

public interface IBibliotecarioRepository extends JpaRepository<Bibliotecario, String> {
    boolean existsByEmail(String email);

    boolean existsByRegistroFuncionario(String registroFuncionario);
}
