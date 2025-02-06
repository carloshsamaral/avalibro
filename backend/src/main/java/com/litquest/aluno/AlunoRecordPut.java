package com.litquest.aluno;

import com.litquest.shared.TipoUsuario;

public record AlunoRecordPut(
        String nome,
        String email,
        String telefone,
        TipoUsuario tipoUsuario,
        String matricula
) {
}
