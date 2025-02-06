import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfessorService } from '../../../services/professor/professor.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-professor-cadastrar',
  imports: [CommonModule,
      ReactiveFormsModule,
      FormsModule,
    ],
  templateUrl: './professor-cadastrar.component.html',
  styleUrl: './professor-cadastrar.component.css'
})
export class ProfessorCadastrarComponent implements OnInit {
usuarioForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private professorService:  ProfessorService,
              private router : Router,
              
  ) {}

  ngOnInit(): void {
    this.usuarioForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      tipoUsuario: ['PROFESSOR', Validators.required],
      disciplina: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const professor : {nome : string; email : string; telefone : string; tipoUsuario : string; disciplina : string} = this.usuarioForm.value;
    if (this.usuarioForm.valid) {
      this.professorService.cadastrar(professor).subscribe((dados: any) => {
        this.usuarioForm.reset();
        if (confirm('Professor cadastrado com sucesso!')) {
          this.router.navigate(["/admin/professor/professor-listar"])
        }
      });
    } else {
      console.log('Formulário inválido.');
    }
  }
}
