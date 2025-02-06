package com.litquest.locacao;

import com.litquest.aluno.IAlunoRepository;
import com.litquest.exception.RecordNotUpdateException;
import com.litquest.livro.ILivroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.time.LocalDate;

@RestController
@RequestMapping("/api/v1/locacao")
public class LivroLocacaoController {

    private final ILivroLocacaoRepository repository;
    private final ILivroRepository livroRepository;
    private final IAlunoRepository alunoRepository;

    @Autowired
    public LivroLocacaoController(ILivroLocacaoRepository repository
                            ,ILivroRepository livroRepository
                            ,IAlunoRepository alunoRepository) {
        this.repository = repository;
        this.livroRepository = livroRepository;
        this.alunoRepository = alunoRepository;
    }

    @GetMapping
    public ResponseEntity buscaLocacoes(){
        var locacoes = repository.findAll();
        return ResponseEntity.ok(locacoes);
    }

    @GetMapping("/{id}")
    public ResponseEntity buscaLocacao(@PathVariable String id){
        var locacao = repository.findById(id);
        return ResponseEntity.ok(locacao);
    }

    @GetMapping("/devolver/{id}")
    public ResponseEntity marcaDevolucao(@PathVariable String id){
        var locacao = repository.getReferenceById(id);

        locacao.setDataDevolucaoReal(LocalDate.now());
        repository.save(locacao);
        return ResponseEntity.ok(locacao);
    }

    @PostMapping
    public ResponseEntity cadastra(@RequestBody LivroLocacaoRecordPost request, UriComponentsBuilder uriBuilder){
        var livro = livroRepository.getReferenceById(request.idLivro());
        var aluno = alunoRepository.getReferenceById(request.idAluno());

        System.out.println(request);
        var locacao = new LivroLocacao(request, aluno, livro);

        repository.save(locacao);

        var uri = uriBuilder.path("/api/v1/locacao/{id}").buildAndExpand(locacao.getIdLocacao()).toUri();
        return ResponseEntity.created(uri).body(locacao);
    }

    @PutMapping("/{id}")
    public ResponseEntity atualiza(@PathVariable String id, @RequestBody LivroLocacaoRecordPut request){
        var locacaoAntiga = repository.getReferenceById(id);
        var locacaoAntigaRecord = locacaoAntiga.toRecord();

        if(locacaoAntigaRecord.equals(request)){
            throw new RecordNotUpdateException("Não houve alteração na locação");
        }
        var livro = livroRepository.getReferenceById(request.idLivro());
        var aluno = alunoRepository.getReferenceById(request.idAluno());
        locacaoAntiga.atualiza(request, aluno, livro);
        repository.save(locacaoAntiga);

        return ResponseEntity.ok(locacaoAntiga);
    }

}
