import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocacaoService {

  constructor(private httpClient : HttpClient) { }

  buscarTodos(){
    return this.httpClient.get<any[]>(environment.locacaoApi);
  }

  cadastrar(locacao : {idLivro : string; idAluno : string; dataLocacao : string; dataDevolucaoPrevista : string}){
    return this.httpClient.post(environment.locacaoApi, locacao);
  }

  devolver(idLocacao : string){
    return this.httpClient.get(environment.locacaoApi + '/devolver/' + idLocacao)
  }
  
}
