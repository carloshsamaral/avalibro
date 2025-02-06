import { Component, OnInit } from '@angular/core';
import { LivroService } from '../../../services/livro/livro.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro-cadastrar',
  imports: [CommonModule,
      ReactiveFormsModule,
      FormsModule],
  templateUrl: './livro-cadastrar.component.html',
  styleUrl: './livro-cadastrar.component.css'
})
export class LivroCadastrarComponent implements OnInit {

  usuarioForm!: FormGroup;
  
  constructor(private livroService : LivroService,
    private fb: FormBuilder,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.usuarioForm = this.fb.group({
      titulo: ['', Validators.required],
      autor: ['', Validators.required],
      genero: ['', Validators.required],
      anoPublicacao: ['', Validators.required],
      disponivel: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const livro : {titulo : string; autor : string; genero : string; anoPublicacao : BigInteger; disponivel : boolean} = {
      titulo: this.usuarioForm.get('titulo')!.value,
      autor: this.usuarioForm.get('autor')!.value,
      genero: this.usuarioForm.get('genero')!.value,
      anoPublicacao: this.usuarioForm.get('anoPublicacao')!.value,
      disponivel: this.usuarioForm.get('disponivel')!.value
    };
    if (this.usuarioForm.valid) {
      this.livroService.cadastrar(livro).subscribe((dados: any) => {
        this.usuarioForm.reset();
        if (confirm('Livro cadastrado com sucesso!')) {
          this.router.navigate(["/admin/livro/livro-listar"])
        }
      });
    } else {
      console.log('Formulário inválido.');
    }
  }

}
