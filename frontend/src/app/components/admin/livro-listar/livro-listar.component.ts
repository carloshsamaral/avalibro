import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LivroService } from '../../../services/livro/livro.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-livro-listar',
  imports: [CommonModule, RouterLink],
  templateUrl: './livro-listar.component.html',
  styleUrl: './livro-listar.component.css'
})
export class LivroListarComponent implements OnInit{
  
  livros: {titulo:string; id: string; autor : string; genero : string ; anoPublicacao:string; disponivel : boolean}[] =[];

  constructor(private livroService : LivroService) { }
  
  ngOnInit(): void {
    this.livroService.buscarTodos().subscribe((dados: any) => {
      this.livros = dados;
    });
  }


}
