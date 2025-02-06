package com.litquest.shared;

public enum TipoUsuario {
    ALUNO("Aluno"),
    PROFESSOR("Professor"),
    BIBLIOTECARIO("Bibliotecário");

    private final String descricao;

    TipoUsuario(String descricao) {
        this.descricao = descricao;
    }

    public String getDescricao() {
        return descricao;
    }
}
