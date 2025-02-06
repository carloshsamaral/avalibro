import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-bibliotecario-cadastrar',
  imports: [CommonModule,
        ReactiveFormsModule,
        FormsModule,],
  templateUrl: './bibliotecario-cadastrar.component.html',
  styleUrl: './bibliotecario-cadastrar.component.css'
})
export class BibliotecarioCadastrarComponent implements OnInit {
usuarioForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.usuarioForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      tipoUsuario: ['BIBLIOTECARIO', Validators.required],
      registroFuncionario: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.usuarioForm.valid) {
      console.log('Formulário enviado:', this.usuarioForm.value);
    } else {
      console.log('Formulário inválido.');
    }
  }
}
