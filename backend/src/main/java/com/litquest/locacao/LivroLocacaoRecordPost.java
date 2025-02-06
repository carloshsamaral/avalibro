package com.litquest.locacao;

import java.time.LocalDate;

public record LivroLocacaoRecordPost(String idLivro,
                                     String idAluno,
                                     LocalDate dataLocacao,
                                     LocalDate dataDevolucaoPrevista,
                                     LocalDate dataDevolucaoReal) {
}
