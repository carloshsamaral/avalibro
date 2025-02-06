package com.litquest.avaliacao;

import com.litquest.exception.RecordNotUpdateException;
import com.litquest.livro.ILivroRepository;
import com.litquest.locacao.ILivroLocacaoRepository;
import com.litquest.professor.IProfessorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("/api/v1/avaliacao")
public class AvaliacaoController {

    private final IAvaliacaoRepository repository;
    private final ILivroLocacaoRepository livroLocacaoRepository;
    private final IProfessorRepository professorrepository;

    @Autowired
    public AvaliacaoController(IAvaliacaoRepository repository, ILivroLocacaoRepository livroLocacaoRepository, IProfessorRepository professorrepository) {
        this.repository = repository;
        this.livroLocacaoRepository = livroLocacaoRepository;
        this.professorrepository = professorrepository;
    }

    @GetMapping
    public ResponseEntity buscarAvaliacoes(){
        var avaliacoes = repository.findAll();
        return ResponseEntity.ok(avaliacoes);

    }

    @GetMapping("/{id}")
    public ResponseEntity buscaAvaliacao(@PathVariable String id){
        var avaliacao = repository.findById(id);
        return ResponseEntity.ok(avaliacao);
    }

    @PostMapping
    public ResponseEntity cadastrar(@RequestBody AvaliacaoRecordPost request, UriComponentsBuilder uriBuilder){
        var livroLocacao = livroLocacaoRepository.getReferenceById(request.idLocacao());
        var professor = professorrepository.getReferenceById(request.idProfessor());
        var avaliacao = new Avaliacao(request, professor,livroLocacao);

        repository.save(avaliacao);
        var uri = uriBuilder.path("/api/v1/avaliacao/{id}").buildAndExpand(avaliacao.getId()).toUri();

        return ResponseEntity.created(uri).body(avaliacao);
    }

    @PutMapping("/{id}")
    public ResponseEntity atualizar(@PathVariable String id, @RequestBody AvaliacaoRecordPut request){
        var avaliacao = repository.getReferenceById(id);
        var avaliacaoDto = avaliacao.toRecord();
        if(avaliacaoDto.equals(request)){
            throw new RecordNotUpdateException("Não houve alteração na avaliação.");
        }
        var livroLocacao = livroLocacaoRepository.getReferenceById(request.idLocacao());
        var professor = professorrepository.getReferenceById(request.idProfessor());
        avaliacao.atualizacao(request, professor, livroLocacao);
        repository.save(avaliacao);
        return ResponseEntity.ok(avaliacao);
    }

}
