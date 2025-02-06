import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(private httpClient : HttpClient) { }

  buscarTodos (){
    return this.httpClient.get(environment.professorApi);
  }

  cadastrar(professor : {nome : string; email : string; telefone : string; tipoUsuario : string; disciplina : string}){
    return this.httpClient.post(environment.professorApi, professor);
  }

  alterar(professor : {id : string;nome : string; email : string; telefone : string; tipoUsuario : string; disciplina : string}){
    return this.httpClient.put(environment.professorApi + '/' + professor.id, professor);
  }

  buscar(id : string){
    return this.httpClient.get(environment.professorApi+ '/' + id);
  }
}
