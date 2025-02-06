import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AvaliacaoService } from '../../../services/avaliacao/avaliacao.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-avaliacao-listar',
  imports: [CommonModule, RouterLink],
  templateUrl: './avaliacao-listar.component.html',
  styleUrl: './avaliacao-listar.component.css'
})
export class AvaliacaoListarComponent implements OnInit {

  avaliacoes: any;

  constructor(private avaliacaoService : AvaliacaoService) { }

  ngOnInit(): void {
    this.avaliacaoService.buscarTodos().subscribe(
      (data) => {
        this.avaliacoes = data;
        console.log(this.avaliacoes);
      });
  }

}
