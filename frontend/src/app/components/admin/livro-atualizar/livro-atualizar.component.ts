import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LivroService } from '../../../services/livro/livro.service';

@Component({
  selector: 'app-livro-atualizar',
  imports: [CommonModule,
      ReactiveFormsModule],
  templateUrl: './livro-atualizar.component.html',
  styleUrl: './livro-atualizar.component.css'
})
export class LivroAtualizarComponent implements OnInit {


usuarioForm!: FormGroup;
  
  constructor(private livroService : LivroService,
    private fb: FormBuilder,
    private router : Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.usuarioForm = this.fb.group({
      titulo: ['', Validators.required],
      autor: ['', Validators.required],
      genero: ['', Validators.required],
      anoPublicacao: ['', Validators.required],
      disponivel: ['', Validators.required],
      id : [id, Validators.required],
    });
    this.livroService.buscarId(id).subscribe((dados: any) => {
      this.usuarioForm.patchValue({
        titulo: dados.titulo,
        autor: dados.autor,
        genero: dados.genero,
        anoPublicacao: dados.anoPublicacao,
        disponivel: dados.disponivel
        
      });
    });
    
  }

  onSubmit() {
    if (this.usuarioForm.valid) {
     
      this.livroService.atualizar(this.usuarioForm.value).subscribe((dados: any) => {
        this.usuarioForm.reset();
        if (confirm('Livro atualizado com sucesso!')) {
          this.router.navigate(["/admin/livro/livro-listar"])
        }
      });
    } else {
      console.log('Formulário inválido.');
    }
  }
  

}
