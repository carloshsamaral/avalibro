import { Component, OnInit } from '@angular/core';
import { LocacaoService } from '../../../services/locacao/locacao.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-locacao-listar',
  imports: [CommonModule
    ,RouterLink
  ],
  templateUrl: './locacao-listar.component.html',
  styleUrl: './locacao-listar.component.css'
})
export class LocacaoListarComponent implements OnInit{


  locacoes: any;

  constructor(private locacaoService : LocacaoService,
                private router : Router
  ) { }

  ngOnInit(): void {
    this.carregarLocacoes();
  }

  carregarLocacoes(): void {
    this.locacaoService.buscarTodos().subscribe((data: any) => {
      this.locacoes = data;
    });
  }

  marcarDevolucao(idLocacao : string) {
    this.locacaoService.devolver(idLocacao).subscribe(() => {
      alert('Devolução realizada com sucesso!');
      this.carregarLocacoes();
      });

    }
    
  }

