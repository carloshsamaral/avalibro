import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BibliotecarioService {

  constructor(private httpClient : HttpClient) { }

  buscarTodos(){
    return this.httpClient.get(environment.bibliotecarioApi);
  }

  buscar(id : string){
    return this.httpClient.get(environment.bibliotecarioApi + '/' + id);
  }

  atualizar(bibliotecario : {id : string;nome : string; email : string; telefone : string; tipoUsuario : string; matricula : string;}){
    return this.httpClient.put(environment.bibliotecarioApi+ '/' + bibliotecario.id, bibliotecario);
  }
  
}
