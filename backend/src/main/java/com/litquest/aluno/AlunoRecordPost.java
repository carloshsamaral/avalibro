package com.litquest.aluno;

import com.litquest.shared.TipoUsuario;

public record AlunoRecordPost(
        String nome,
        String email,
        String telefone,
        TipoUsuario tipoUsuario,
        String matricula
) {

}
