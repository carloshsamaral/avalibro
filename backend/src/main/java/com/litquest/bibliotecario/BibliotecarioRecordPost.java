package com.litquest.bibliotecario;

import com.litquest.shared.TipoUsuario;

public record BibliotecarioRecordPost(
        String nome,
        String email,
        String telefone,
        TipoUsuario tipoUsuario,
        String registroFuncionario
) {

}
