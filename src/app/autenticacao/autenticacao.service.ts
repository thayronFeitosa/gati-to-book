import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

interface Auth {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient: HttpClient) { }

  autenticar({ password, username }: Auth): Observable<any> {
    return this.httpClient.post('http://localhost:3000/user/login', {
      username,
      password
    });
  }
}
