import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from '../../../services/aluno/aluno.service';
import { CommonModule } from '@angular/common';
import { ProfessorService } from '../../../services/professor/professor.service';

@Component({
  selector: 'app-professor-atualizar',
  imports: [CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './professor-atualizar.component.html',
  styleUrl: './professor-atualizar.component.css'
})
export class ProfessorAtualizarComponent implements OnInit{
  usuarioForm!: FormGroup;

  constructor(private fb: FormBuilder,
      private activatedRoute: ActivatedRoute,
      private professorService: ProfessorService,
      private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.usuarioForm = this.fb.group({
          nome: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          telefone: ['', Validators.required],
          tipoUsuario: ['PROFESSOR', Validators.required],
          disciplina: ['', Validators.required],
          id: ['', Validators.required]
        });
    this.professorService.buscar(id).subscribe((dados: any) => {  
      
      this.usuarioForm.patchValue({
        nome: dados.nome,
        email: dados.email,
        telefone: dados.telefone,
        disciplina: dados.disciplina,
        id: dados.id
      });
    });
    
  }

  onSubmit(): void {


  if (this.usuarioForm.valid) {
     console.log(this.usuarioForm.value)
    this.professorService.alterar(this.usuarioForm.value).subscribe((dados: any) => {
      this.usuarioForm.reset();
      if (confirm('Professor atualizado com sucesso!')) {
        this.router.navigate(["/admin/professor/professor-listar"])
      }
    });
  } else {
    console.log('Formulário inválido.');
  }
}

}
