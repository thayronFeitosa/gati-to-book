import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovoUsuarioService } from './novo-usuario.service';
import { NovoUsuario } from './novo-usuario';
import { minusculoValidator } from './minucsulo.validator';
import { UsuarioExisteService } from './novo-existe.service';
import { ChildActivationStart, Router } from '@angular/router';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioForm!: FormGroup;
  private usuarioExistenteService!: UsuarioExisteService;

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private router: Router
    ) { }

  ngOnInit(): void {

    this.novoUsuarioForm = this.formBuilder.group({
      email: ['', [
        Validators.required, Validators.email
      ]],
      fullName: ['', [
        Validators.required, Validators.minLength(4)
      ]],
      userName: ['', [
        minusculoValidator, Validators.minLength(4)
      ]],
      password: ['', [
        Validators.required, Validators.minLength(4)
      ]],
    })
  }
  cadatrar() {
    if (this.novoUsuarioForm.valid) {
      const novoUsuario = this.novoUsuarioForm?.getRawValue() as NovoUsuario
      this.novoUsuarioService.create(novoUsuario).subscribe(() => {
        this.router.navigate([''])
      }, (erro) => {
        console.log(erro)
      })
    }

  }

}
