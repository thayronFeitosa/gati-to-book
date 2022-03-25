import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovoUsuarioService } from './novo-usuario.service';
import { NovoUsuario } from './novo-usuario';
import { minusculoValidator } from './minucsulo.validator';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioForm!:FormGroup;

  constructor(private formBuilder: FormBuilder, private novoUsuarioService: NovoUsuarioService) { }
  
  ngOnInit(): void {
    
    this.novoUsuarioForm = this.formBuilder.group({
      email: ['', [
        Validators.required, Validators.email
      ]],
      fullName: ['', [
        Validators.required, Validators.minLength(4)
      ]],
      userName: ['', [
        minusculoValidator
      ]],
      password: ['', [
        Validators.required, Validators.minLength(4)
      ]],
    })
  }
  cadatrar() {
    const novoUsuario = this.novoUsuarioForm?.getRawValue() as NovoUsuario
    console.log('asdfadsf:  ', novoUsuario);
  }

}
