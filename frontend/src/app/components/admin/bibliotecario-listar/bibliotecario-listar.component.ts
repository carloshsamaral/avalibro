import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BibliotecarioService } from '../../../services/bibliotecario/bibliotecario.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bibliotecario-listar',
  imports: [CommonModule,
      RouterLink
  ],
  templateUrl: './bibliotecario-listar.component.html',
  styleUrl: './bibliotecario-listar.component.css'
})
export class BibliotecarioListarComponent implements OnInit {

  bibliotecarios: { id: string;nome: string; email: string; telefone: string; tipoUsuario: string; registroFuncionario: string; }[] = []
  constructor(private bibliotecarioService : BibliotecarioService) { }

  ngOnInit(): void {
    this.bibliotecarioService.buscarTodos().subscribe((dados: any) => {
      this.bibliotecarios = dados;
    });
  }
  

  alterarBibliotecario(_t15: { nome: string; email: string; telefone: string; tipoUsuario: string; registroFuncionario: string; }) {
    throw new Error('Method not implemented.');
    }
}
