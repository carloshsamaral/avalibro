package com.litquest.professor;

import com.litquest.shared.TipoUsuario;
import com.litquest.shared.Usuario;
import jakarta.persistence.Entity;
import lombok.*;

@Entity(name = "litquest_professor")
@Data
@ToString
@EqualsAndHashCode(callSuper = true)
@AllArgsConstructor
@NoArgsConstructor
public class Professor extends Usuario {
    private String disciplina;

    public Professor(ProfessorRecordPost request) {
        super(request.nome(), request.email(), request.telefone(), request.tipoUsuario());
        this.disciplina = request.disciplina();
    }

    public ProfessorRecordPut toRecord(){
        return new ProfessorRecordPut(this.getNome(), this.getEmail(), this.getTelefone(), this.getTipoUsuario(), this.getDisciplina(), this.getId());
    }

    public void atualiza(ProfessorRecordPut request){
        setNome(request.nome());
        setEmail(request.email());
        setTelefone(request.telefone());
        setDisciplina(request.disciplina());
    }
}
