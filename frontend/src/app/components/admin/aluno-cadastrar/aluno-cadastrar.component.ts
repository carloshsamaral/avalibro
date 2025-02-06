import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlunoService } from '../../../services/aluno/aluno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluno-cadastrar',
  imports: [CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './aluno-cadastrar.component.html',
  styleUrl: './aluno-cadastrar.component.css'
})
export class AlunoCadastrarComponent implements OnInit {
  usuarioForm!: FormGroup;

  constructor(private fb: FormBuilder,
      private alunoService : AlunoService,
      private router : Router
  ) {}

  ngOnInit(): void {
    this.usuarioForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      tipoUsuario: ['ALUNO', Validators.required],
      matricula: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const aluno : {nome : string; email : string; telefone : string; tipoUsuario : string; matricula : string} = {
      nome: this.usuarioForm.get('nome')!.value,
      email: this.usuarioForm.get('email')!.value,
      telefone: this.usuarioForm.get('telefone')!.value,
      tipoUsuario: this.usuarioForm.get('tipoUsuario')!.value,
      matricula: this.usuarioForm.get('matricula')!.value
    };
    if (this.usuarioForm.valid) {
      this.alunoService.cadastrar(aluno).subscribe((dados: any) => {
        this.usuarioForm.reset();
        if (confirm('Aluno cadastrado com sucesso!')) {
          this.router.navigate(["/admin/aluno/aluno-listar"])
        }
      });
    } else {
      console.log('Formulário inválido.');
    }
  }

}
