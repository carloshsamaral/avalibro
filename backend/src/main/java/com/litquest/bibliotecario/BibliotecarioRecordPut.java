package com.litquest.bibliotecario;

import com.litquest.shared.TipoUsuario;

public record BibliotecarioRecordPut(
        String nome,
        String email,
        String telefone,
        String registroFuncionario,
        String id,
        TipoUsuario tipoUsuario
) {
}
