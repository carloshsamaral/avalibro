package com.litquest.livro;

public record LivroRecordPost (
         String titulo,
         String autor,
         String genero,
         int anoPublicacao,
         boolean disponivel) {
}
