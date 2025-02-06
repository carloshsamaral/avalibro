import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../../../services/aluno/aluno.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aluno-listar',
  imports: [CommonModule,  RouterLink],
  templateUrl: './aluno-listar.component.html',
  styleUrl: './aluno-listar.component.css'
})
export class AlunoListarComponent implements OnInit {
  
  alunos: { id: string; nome: string; email: string; telefone: string; tipoUsuario: string; matricula: string; }[] = [];
  constructor(private alunoService : AlunoService) { }

  ngOnInit(): void {
    
    this.alunoService.buscarTodos().subscribe((dados: any) => {
      this.alunos = dados;
    });
  }

  

  alterarAluno(_t15: { nome: string; email: string; telefone: string; tipoUsuario: string; matricula: string; }) {
    console.log(_t15);
}

}
