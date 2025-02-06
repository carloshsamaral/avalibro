package com.litquest.avaliacao;

import java.time.LocalDate;

public record AvaliacaoRecordPut(String id, String idProfessor, String avaliacaoProfessor, LocalDate dataAvaliacao, String idLocacao, String avaliacaoAluno) {
}
