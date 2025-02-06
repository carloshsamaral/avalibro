package com.litquest.locacao;

import java.time.LocalDate;

public record LivroLocacaoRecordPut(String idLivro,
                                    String idAluno,
                                    LocalDate dataLocacao,
                                    LocalDate dataDevolucaoPrevista,
                                    LocalDate dataDevolucaoReal,
                                    String idLocacao) {
}
