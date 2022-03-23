import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string = '1';
  public password: string = '';

  constructor(private authService: AutenticacaoService) { }

  ngOnInit(): void { }

  login() {
    this.authService.autenticar({
      password: this.password,
      username: this.username
    }).subscribe((response) => {
      console.log(response);

    }, (err) => {
      console.log(err);

    })
    console.log(this.username, " | ", this.password)
  }

}
