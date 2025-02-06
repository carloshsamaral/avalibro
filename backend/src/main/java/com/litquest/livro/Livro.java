package com.litquest.livro;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@Entity(name = "litquest_livro")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Livro {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    private String titulo;
    private String autor;
    private String genero;
    private int anoPublicacao;
    private boolean disponivel;

    public Livro(LivroRecordPost request) {
        this.titulo = request.titulo();
        this.autor = request.autor();
        this.genero = request.genero();
        this.anoPublicacao = request.anoPublicacao();
        this.disponivel = request.disponivel();
    }

    public void indisponivel(){
        this.disponivel = false;
    }

    public LivroRecordPut toRecord(){
        return new LivroRecordPut(this.id, this.titulo, this.autor, this.genero, this.anoPublicacao, this.disponivel);
    }

    public void atualizar(LivroRecordPut request){
        this.titulo = request.titulo();
        this.autor = request.autor();
        this.genero = request.genero();
        this.anoPublicacao = request.anoPublicacao();
        this.disponivel = request.disponivel();
    }
}
