package com.litquest.avaliacao;

import java.time.LocalDate;

public record AvaliacaoRecordPost(String idProfessor, String avaliacaoProfessor, LocalDate dataAvaliacao, String idLocacao, String avaliacaoAluno) {
}
