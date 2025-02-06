package com.litquest.aluno;

import com.litquest.exception.IllegalRecordException;
import com.litquest.exception.RecordExistException;
import com.litquest.shared.TipoUsuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("/api/v1/aluno")
public class AlunoController {


    private final IAlunoRepository repository;

    @Autowired
    public AlunoController(IAlunoRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    public ResponseEntity cadastrar(@RequestBody AlunoRecordPost request, UriComponentsBuilder uriBuilder){
        Aluno a = new Aluno(request);

        if(repository.existsByEmail(a.getEmail())){
            var erro = "O e-mail (" + a.getEmail() + ") já existe na nossa base. Por favor, cadastre um novo.";
            throw new RecordExistException(erro);
        }

        repository.save(a);
        var uri = uriBuilder.path("/api/v1/aluno/{id}").buildAndExpand(a.getId()).toUri();

        return ResponseEntity.created(uri).body(a);
    }

    @GetMapping
    public ResponseEntity todosAlunos(){
        var alunos = repository.findAll();
        return ResponseEntity.ok(alunos);
    }

    @GetMapping("/{id}")
    public ResponseEntity encontraAluno(@PathVariable String id){
        var aluno = repository.findById(id).orElseThrow(
                () -> new IllegalRecordException("Aluno com o ID (" + id + ") não encontrado")
        );
        return ResponseEntity.ok(aluno);
    }

    @PutMapping("/{id}")
    public ResponseEntity atualizar(@PathVariable String id, @RequestBody AlunoRecordPut request){

        var aluno = repository.findById(id).orElseThrow(
                () -> new IllegalRecordException("Aluno com o ID (" + id + ") não encontrado")
        );

        aluno.AtualizarAluno(request);
        repository.save(aluno);

        return ResponseEntity.ok(aluno);
    }

}
