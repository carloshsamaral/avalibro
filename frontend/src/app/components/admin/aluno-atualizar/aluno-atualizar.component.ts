import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from '../../../services/aluno/aluno.service';

@Component({
  selector: 'app-aluno-atualizar',
  imports: [CommonModule,
    ReactiveFormsModule],
  templateUrl: './aluno-atualizar.component.html',
  styleUrl: './aluno-atualizar.component.css'
})
export class AlunoAtualizarComponent implements OnInit {
  usuarioForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private alunoService: AlunoService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    console.log(id);
    this.usuarioForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      tipoUsuario: ['ALUNO', Validators.required],
      matricula: ['', Validators.required],
      id: ['', Validators.required]
    });
    this.alunoService.buscarId(id).subscribe((dados: any) => {
      console.log(dados);

      this.usuarioForm.patchValue({
        nome: dados.nome,
        email: dados.email,
        telefone: dados.telefone,
        matricula: dados.matricula,
        id: dados.id
      });
    });
    
  }

  onSubmit(): void {
    if (this.usuarioForm.valid) {
     
      this.alunoService.atualizar(this.usuarioForm.value).subscribe((dados: any) => {
        this.usuarioForm.reset();
        if (confirm('Aluno atualizado com sucesso!')) {
          this.router.navigate(["/admin/aluno/aluno-listar"])
        }
      });
    } else {
      console.log('Formulário inválido.');
    }
  }

}
