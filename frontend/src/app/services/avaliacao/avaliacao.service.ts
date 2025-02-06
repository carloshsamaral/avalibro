import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {

  constructor(private httpClient : HttpClient) { }

  buscarTodos() {
    return this.httpClient.get(environment.avaliacaoApi);
  }

  buscarId(id : string){
    return this.httpClient.get(environment.avaliacaoApi + '/' + id);
  }

  atualizar(avaliacao : { id: string; idProfessor: string; avaliacaoProfessor: string; dataAvaliacao: string; idLocacao: string; avaliacaoAluno: string; }){
    return this.httpClient.put(environment.avaliacaoApi + '/' + avaliacao.id, avaliacao);

  }
}
