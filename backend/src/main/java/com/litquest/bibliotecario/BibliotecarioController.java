package com.litquest.bibliotecario;

import com.litquest.exception.IllegalRecordException;
import com.litquest.exception.RecordExistException;
import com.litquest.exception.RecordNotFoundException;
import com.litquest.exception.RecordNotUpdateException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;
import java.util.concurrent.atomic.AtomicReference;

@RestController
@RequestMapping("/api/v1/bibliotecario")
public class BibliotecarioController {

    private final IBibliotecarioRepository repository;

    @Autowired
    public BibliotecarioController(IBibliotecarioRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public ResponseEntity buscarTodos(){
        var listBibliotecario = repository.findAll();
        return ResponseEntity.ok(listBibliotecario);
    }

    @PostMapping
    public ResponseEntity cadastrar(@RequestBody BibliotecarioRecordPost request, UriComponentsBuilder uriBuilder){
        var bibliotecario = new Bibliotecario(request);

        if(repository.existsByEmail(request.email())){
            throw new RecordExistException("Bibliotecário com o e-mail (" + request.email() + ") já cadastrado");
        }

        if(repository.existsByRegistroFuncionario(request.registroFuncionario())){
            throw new RecordExistException("Bibliotecário com o número de registro (" + request.registroFuncionario() + ") já cadastrado");
        }
        repository.save(bibliotecario);
        var uri = uriBuilder.path("/api/v1/bibliotecario/{id}").buildAndExpand(bibliotecario.getId()).toUri();

        return ResponseEntity.created(uri).body(bibliotecario);
    }

    @GetMapping("/{id}")
    public ResponseEntity buscarBibliotecario(@PathVariable String id){
        var bibliotecario = repository.findById(id).orElseThrow(
                () -> new IllegalRecordException("O bibliotecário com o ID (" + id + ") não existe.")
        );

        return ResponseEntity.ok(bibliotecario);
    }

    @PutMapping("/{id}")
    public ResponseEntity atualizarBibliotecario (@PathVariable String id, @RequestBody BibliotecarioRecordPut request){
        var bibliotecario = repository.findById(id).orElseThrow(
                    ()-> new IllegalRecordException("O bibliotecário com o ID (" + id + ") não existe.")
        );

        var bibliotecarioDto = bibliotecario.toRecord();

        if(bibliotecarioDto.equals(request)){
            throw new RecordNotUpdateException("Não houve alteração no bibliotecário.");
        }

        if(repository.existsByEmail(request.email())){
            throw new RecordExistException("Bibliotecário com o e-mail (" + request.email() + ") já cadastrado");
        }

        if(repository.existsByRegistroFuncionario(request.registroFuncionario())){
            throw new RecordExistException("Bibliotecário com o número de registro (" + request.registroFuncionario() + ") já cadastrado");
        }

        bibliotecario.atualizaBibliotecario(request);
        repository.save(bibliotecario);
        return ResponseEntity.ok(bibliotecario);
    }

}
