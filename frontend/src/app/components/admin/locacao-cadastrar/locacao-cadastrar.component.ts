import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LocacaoService } from '../../../services/locacao/locacao.service';
import { AlunoService } from '../../../services/aluno/aluno.service';
import { LivroService } from '../../../services/livro/livro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-locacao-cadastrar',
  imports: [CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './locacao-cadastrar.component.html',
  styleUrl: './locacao-cadastrar.component.css'
})
export class LocacaoCadastrarComponent implements OnInit {

  meuFormulario!: FormGroup;
  itensDropdown: any[] = [];
  itensDropdownLivro: any[] = [];

  constructor(private fb: FormBuilder,
    private locacaoService: LocacaoService,
    private alunoService : AlunoService,
    private livroService: LivroService,
    private router : Router
  ) { }

  ngOnInit(): void  {
    const dataAtual = new Date();
    let dataFutura = new Date();
    dataFutura.setDate(dataAtual.getDate() + 10);

    const diaSemana = dataFutura.getDay(); 

    if (diaSemana === 0) {
      dataFutura.setDate(dataFutura.getDate() + 1);
    } else if (diaSemana === 6) {
      dataFutura.setDate(dataFutura.getDate() + 2);
    }

    const dataFormatada = dataFutura.toISOString().split('T')[0];
    const dataAtualFormatada = dataAtual.toISOString().split('T')[0];

    this.meuFormulario = this.fb.group({
      idAluno: ['', Validators.required], 
      idLivro: ['', Validators.required],
      dataDevolucaoPrevista: [dataFormatada, Validators.required],
      dataLocacao: [dataAtualFormatada],
    });
    this.alunoService.buscarTodos().subscribe(
      (resposta: any) => {
        this.itensDropdown = resposta;
      }
    );
    this.livroService.buscarTodos().subscribe(
      (resposta: any) => {
        this.itensDropdownLivro = resposta;
      }
    );
}

onSubmit() {
  this.locacaoService.cadastrar(this.meuFormulario.value).subscribe(
    (resposta: any) => {
      this.meuFormulario.reset();
        if (confirm('Locação cadastrado com sucesso!')) {
          this.router.navigate(["/admin/locacao/locacao-listar"])
        }
      });
    }
  
  }

