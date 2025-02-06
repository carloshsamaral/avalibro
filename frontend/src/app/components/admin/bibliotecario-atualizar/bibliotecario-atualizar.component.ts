import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BibliotecarioService } from '../../../services/bibliotecario/bibliotecario.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bibliotecario-atualizar',
  imports: [CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './bibliotecario-atualizar.component.html',
  styleUrl: './bibliotecario-atualizar.component.css'
})
export class BibliotecarioAtualizarComponent implements OnInit{

  usuarioForm!: FormGroup;

  constructor(private fb: FormBuilder,
      private activatedRoute: ActivatedRoute,
      private bibliotecarioService: BibliotecarioService,
      private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.usuarioForm = this.fb.group({
          nome: ['', Validators.required],
          email: ['',   Validators.required],
          telefone: ['',   Validators.required],
          tipoUsuario: ['BIBLIOTECARIO',   Validators.required],
          id: ['',   Validators.required],
          registroFuncionario: ['',   Validators.required]
        });
    this.bibliotecarioService.buscar(id).subscribe((dados: any) => {  
      this.usuarioForm.patchValue({
        nome: dados.nome,
        email: dados.email,
        telefone: dados.telefone,
        registroFuncionario: dados.registroFuncionario,
        id: dados.id
      });
    });
    
  }

  onSubmit() {
    if (this.usuarioForm.valid) {
      this.bibliotecarioService.atualizar(this.usuarioForm.value).subscribe((dados: any) => {
        this.usuarioForm.reset();
        if (confirm('Bibliotecário atualizado com sucesso!')) {
          this.router.navigate(["/admin/bibliotecario/bibliotecario-listar"])
        }
      });
    }
    }
}
