package com.litquest.livro;

public record LivroRecordPut(String id,
                             String titulo,
                             String autor,
                             String genero,
                             int anoPublicacao,
                             boolean disponivel) {
}
