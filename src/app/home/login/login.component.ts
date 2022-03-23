import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string = '1';
  public password: string = '';

  constructor(
    private authService: AutenticacaoService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  login() {
    this.authService.autenticar({
      password: this.password,
      username: this.username
    }).subscribe((response) => {
      this.router.navigate(['animais'])

    }, (err) => {
      console.log(err);

    })
    console.log(this.username, " | ", this.password)
  }

}
