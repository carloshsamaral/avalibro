package com.litquest.livro;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ILivroRepository extends JpaRepository<Livro, String> {
}
