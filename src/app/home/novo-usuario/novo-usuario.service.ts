import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root'
})

export class NovoUsuarioService {

  constructor(private http: HttpClient) { }

  create(novoUsario: NovoUsuario) {
    return this.http.post('http://localhost:3000/user/signup',novoUsario )
  }

  verificaUsuarioExistente(nomeUsario: string) {
    return this.http.get(`http://localhost:3000/user/exists/${nomeUsario}`)
  }
}
