import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AvaliacaoService } from '../../../services/avaliacao/avaliacao.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avaliacao-aluno',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './avaliacao-aluno.component.html',
  styleUrl: './avaliacao-aluno.component.css'
})
export class AvaliacaoAlunoComponent implements OnInit {

  avaliacaoForm!: FormGroup;

  constructor(private fb: FormBuilder,
      private activatedRoute: ActivatedRoute,
      private avaliacaoService : AvaliacaoService,
    private router: Router) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    const dataAtual = new Date();
    const dataAtualFormatada = dataAtual.toISOString().split('T')[0];

    this.avaliacaoForm = this.fb.group({
      id: [''],
      idProfessor: [''],
      avaliacaoProfessor: [''],
      dataAvaliacao: [''],
      idLocacao: [''],
      avaliacaoAluno : ['']
    });
    
    this.avaliacaoService.buscarId(id).subscribe((dados: any) => {
      console.log(dados);

      this.avaliacaoForm.patchValue({
        id: dados.id,
        idProfessor: dados.professor.id,
        avaliacaoProfessor: dados.avaliacaoProfessor,
        dataAvaliacao: dados.dataAvaliacao ? dados.dataAvaliacao : dataAtualFormatada,
        idLocacao: dados.livroLocacao.idLocacao,
        avaliacaoAluno: dados.avaliacaoAluno
        
      });
    });
  }

  onSubmit(): void {
    if (this.avaliacaoForm.valid) {
      
      this.avaliacaoService.atualizar(this.avaliacaoForm.value).subscribe((dados: any) => {
        this.avaliacaoForm.reset();
        if (confirm('Avaliação atualizada com sucesso!')) {
          this.router.navigate(["/admin/avaliacao/avaliacao-listar"])
        }
      });
    } else {
      console.log('Formulário inválido.');
    }
  }
}
