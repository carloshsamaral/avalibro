import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private httpClient : HttpClient) { }

  buscarTodos(){
    return this.httpClient.get(environment.alunoApi);
  }

  buscarId(id : string){
    return this.httpClient.get(environment.alunoApi + '/' + id);
  }

  atualizar(aluno : {id : string; nome : string; email : string; telefone : string; tipoUsuario : string; matricula : string;}){
    return this.httpClient.put(environment.alunoApi+ '/' + aluno.id, aluno);
  }

  cadastrar(aluno : {nome : string; email : string; telefone : string; tipoUsuario : string; matricula : string;}){
    return this.httpClient.post(environment.alunoApi, aluno);
  }
}
