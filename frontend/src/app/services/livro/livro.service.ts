import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LivroService {


  constructor(private httpClient : HttpClient) { }

  buscarTodos(){
    return this.httpClient.get(environment.livroApi);
  }

  cadastrar(livro: {titulo : string; autor : string; genero : string; anoPublicacao : BigInteger; disponivel : boolean}) {
    return this.httpClient.post(environment.livroApi, livro);
  }

  buscarId(id : string){
    return this.httpClient.get(environment.livroApi + '/' + id);
  }

  atualizar(livro: {id : string;titulo : string; autor : string; genero : string; anoPublicacao : BigInteger; disponivel : boolean}){
    return this.httpClient.put(environment.livroApi + '/' + livro.id, livro);
  }
}
