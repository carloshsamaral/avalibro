package com.litquest.aluno;


import com.litquest.shared.Usuario;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.*;

import java.util.Objects;

@EqualsAndHashCode(callSuper = true)
@Table(name = "litquest_aluno")
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Aluno extends Usuario {

    private String matricula;



    public Aluno(AlunoRecordPost request) {
        super( request.nome(), request.email(), request.telefone(), request.tipoUsuario());
        this.matricula = request.matricula();
    }

    public void AtualizarAluno(AlunoRecordPut request) {
    this.setNome(request.nome());
    this.setEmail(request.email());
    this.setTelefone(request.telefone());
    this.setTipoUsuario(request.tipoUsuario());
    this.matricula = request.matricula();
    }

    public AlunoRecordPut toRecord() {
        return new AlunoRecordPut(
               this.getNome(),
               this.getEmail(),
               this.getTelefone(),
               this.getTipoUsuario(),
               this.matricula);
    }


}
