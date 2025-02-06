package com.litquest.livro;

import com.litquest.exception.RecordNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("/api/v1/livro")
public class LivroController {

    private final ILivroRepository repository;

    @Autowired
    public LivroController(ILivroRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public ResponseEntity buscaLivros(){
        var livros = repository.findAll();
        return ResponseEntity.ok(livros);
    }

    @GetMapping("/{id}")
    public ResponseEntity buscaLivro(@PathVariable String id){
        var livro = repository.findById(id).orElseThrow(
                () -> new RecordNotFoundException("O ID (" + id + ") do livro não existe")
        );
        return ResponseEntity.ok(livro);
    }

    @PostMapping
    public ResponseEntity cadastrarLivro(@RequestBody LivroRecordPost request, UriComponentsBuilder uriBuilder){
        var livro = new Livro(request);
        repository.save(livro);
        var uri = uriBuilder.path("/api/v1/livro/{id}").buildAndExpand(livro.getId()).toUri();
        return ResponseEntity.created(uri).body(livro);
    }

    @PutMapping("/{id}")
    public ResponseEntity atualizar(@PathVariable String id, @RequestBody LivroRecordPut request){
        var livro = repository.getReferenceById(id);
        livro.atualizar(request);
        repository.save(livro);
        return ResponseEntity.ok(livro);

    }
}
