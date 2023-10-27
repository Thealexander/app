import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SeguridadService } from '../../services/seguridad.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private seguridadService: SeguridadService){}

  loginUsuario(form: NgForm) {
    this.seguridadService.login({
      email: form.value.email,
      password: form.value.password,
    });
  }


}
