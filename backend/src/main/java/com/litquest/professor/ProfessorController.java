package com.litquest.professor;

import com.litquest.exception.IllegalRecordException;
import com.litquest.exception.RecordExistException;
import com.litquest.exception.RecordNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("/api/v1/professor")
public class ProfessorController {

    private final IProfessorRepository repository;

    @Autowired
    public ProfessorController(IProfessorRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public ResponseEntity buscaProfessores(){
        var professores = repository.findAll();
        return ResponseEntity.ok(professores);
    }

    @GetMapping("/{id}")
    public ResponseEntity buscaProfessor(@PathVariable String id){
        var professor = repository.findById(id).orElseThrow(
                () -> new RecordNotFoundException("O professor com o ID (" + id + ") não existe.")
        );
        return ResponseEntity.ok(professor);
    }

    @PostMapping
    public ResponseEntity cadastraProfessor(@RequestBody ProfessorRecordPost request, UriComponentsBuilder uriBuilder){
        var professor = new Professor(request);
        if(repository.existsByEmail(professor.getEmail())){
            var erro = "O e-mail (" + professor.getEmail() + ") já existe na nossa base. Por favor, cadastre um novo.";
            throw new RecordExistException(erro);
        }

        repository.save(professor);
        var uri = uriBuilder.path("/api/v1/professor/{id}").buildAndExpand(professor.getId()).toUri();
        return ResponseEntity.created(uri).body(professor);
    }

    @PutMapping("/{id}")
    public ResponseEntity atualizar(@PathVariable String id, @RequestBody ProfessorRecordPut request){
        var professor = repository.findById(id).orElseThrow(
                () -> new IllegalRecordException("Professor com o ID (" + id + ") não encontrado")
        );
        professor.atualiza(request);
        repository.save(professor);
        return ResponseEntity.ok(professor);

    }

}
