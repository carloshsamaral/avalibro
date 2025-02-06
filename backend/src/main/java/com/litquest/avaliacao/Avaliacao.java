package com.litquest.avaliacao;

import com.litquest.locacao.LivroLocacao;
import com.litquest.professor.Professor;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Table(name = "litquest_avaliacao")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Avaliacao {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    @ManyToOne
    @JoinColumn(name = "id_professor", nullable = false)
    private Professor professor;

    @ManyToOne
    @JoinColumn(name = "id_livroLocacao", nullable = false)
    private LivroLocacao livroLocacao;
    private String avaliacaoAluno;
    private String retornoProfessor;
    private LocalDate dataAvaliacao;

    public Avaliacao(AvaliacaoRecordPost request, Professor professor, LivroLocacao livroLocacao) {

        this.professor = professor;
        this.livroLocacao = livroLocacao;
        this.avaliacaoAluno = request.avaliacaoAluno();
        this.retornoProfessor = request.avaliacaoProfessor();
        this.dataAvaliacao = request.dataAvaliacao();
    }

    public AvaliacaoRecordPut toRecord(){
        return new AvaliacaoRecordPut(this.id, this.professor.getId(), this.retornoProfessor, this.dataAvaliacao, this.livroLocacao.getIdLocacao(), this.avaliacaoAluno);
    }

    public void atualizacao(AvaliacaoRecordPut request, Professor professor, LivroLocacao livroLocacao){
        this.professor = professor;
        this.livroLocacao = livroLocacao;
        this.avaliacaoAluno = request.avaliacaoAluno();
        this.retornoProfessor = request.avaliacaoProfessor();
        this.dataAvaliacao = request.dataAvaliacao();
    }
}
