import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../../../services/professor/professor.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-professor-listar',
  imports: [CommonModule,
    RouterLink
  ],
  templateUrl: './professor-listar.component.html',
  styleUrl: './professor-listar.component.css'
})
export class ProfessorListarComponent implements OnInit {
  professores: { id: string;nome: string; email: string; telefone: string; tipoUsuario: string; disciplina: string; }[] = [];
  constructor(private professorService : ProfessorService) { }

  ngOnInit(): void {
    this.professorService.buscarTodos().subscribe((dados: any) => {
      this.professores = dados;
    });
  }
  

  alterarProfessor(_t15: { nome: string; email: string; telefone: string; tipoUsuario: string; disciplina: string; }) {
    throw new Error('Method not implemented.');
    }
}
