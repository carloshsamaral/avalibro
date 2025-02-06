package com.litquest.bibliotecario;

import com.litquest.shared.TipoUsuario;
import com.litquest.shared.Usuario;
import jakarta.persistence.Entity;
import lombok.*;

@Entity(name = "litquest_bibliotecario")
@Data
@ToString
@EqualsAndHashCode(callSuper = true)
@AllArgsConstructor
@NoArgsConstructor
public class Bibliotecario extends Usuario {
    private String registroFuncionario;

    public Bibliotecario(BibliotecarioRecordPost request) {
        super(request.nome(), request.email(), request.telefone(), request.tipoUsuario());
        this.registroFuncionario = request.registroFuncionario();
    }

    public void atualizaBibliotecario(BibliotecarioRecordPut request) {
        this.setNome(request.nome());
        this.setEmail(request.email());
        this.setTelefone(request.telefone());
        this.setRegistroFuncionario(request.registroFuncionario());
    }

    public BibliotecarioRecordPut toRecord(){
        return new BibliotecarioRecordPut(this.getNome(), this.getEmail(), this.getTelefone(), this.getRegistroFuncionario(), this.getId(), this.getTipoUsuario());
    }
}
