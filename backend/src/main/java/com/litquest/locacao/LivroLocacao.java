package com.litquest.locacao;

import com.litquest.aluno.Aluno;
import com.litquest.livro.Livro;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Table(name = "litquest_livro_locacao")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class LivroLocacao {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String idLocacao;

    @ManyToOne
    @JoinColumn(name = "id_livro", nullable = false)
    private Livro livro; // Relacionamento com a entidade Livro

    @ManyToOne
    @JoinColumn(name = "id_aluno", nullable = false)
    private Aluno aluno;

    @Column(name = "data_locacao", nullable = false)
    private LocalDate dataLocacao;

    @Column(name = "data_devolucao_prevista", nullable = false)
    private LocalDate dataDevolucaoPrevista;

    @Column(name = "data_devolucao_real")
    private LocalDate dataDevolucaoReal;

    public LivroLocacao(LivroLocacaoRecordPost request, Aluno aluno, Livro livro) {

        this.livro = livro;
        this.aluno = aluno;
        this.dataLocacao = request.dataLocacao();
        this.dataDevolucaoPrevista = request.dataDevolucaoPrevista();
        this.dataDevolucaoReal = request.dataDevolucaoReal();
    }

    public LivroLocacaoRecordPut toRecord(){
        return new LivroLocacaoRecordPut(livro.getId(), aluno.getId(), this.dataLocacao, this.dataDevolucaoPrevista, this.dataDevolucaoReal, this.idLocacao);
    }

    public void atualiza(LivroLocacaoRecordPut request, Aluno aluno, Livro livro){
        this.livro = livro;
        this.aluno = aluno;
        this.dataLocacao = request.dataLocacao();
        this.dataDevolucaoPrevista = request.dataDevolucaoPrevista();
        this.dataDevolucaoReal = request.dataDevolucaoReal();
    }
}
