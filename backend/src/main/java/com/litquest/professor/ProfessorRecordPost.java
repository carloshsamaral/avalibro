package com.litquest.professor;

import com.litquest.shared.TipoUsuario;

public record ProfessorRecordPost(
        String nome,
        String email,
        String telefone,
        TipoUsuario tipoUsuario,
        String disciplina
) {

}
