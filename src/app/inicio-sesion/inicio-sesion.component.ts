import { Component, EventEmitter, Output } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { on } from 'events';


@Component({
  selector: 'app-inicio-sesion',
  standalone:true,
  imports:[
    MatButtonModule,
    MatFormFieldModule,
    MatTabsModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  adminCredentials = { username: '', password: '' };
  unidadCredentials = { username: '', password: '' };
  constructor(private router: Router) {}

  @Output() loginSuccess = new EventEmitter<void>();

  onLogin() {
    // Lógica de inicio de sesión
    this.loginSuccess.emit();
  }
  
  onSubmitAdmin() {
    // Lógica para iniciar sesión como administrador
    console.log('Admin Credentials:', this.adminCredentials);
    // Aquí puedes agregar la lógica para autenticar al administrador
    this.router.navigate(['/app']);
    this.onLogin();
  }

  onSubmitUnidad() {
    // Lógica para iniciar sesión como Unidad/Departamento
    console.log('Unidad Credentials:', this.unidadCredentials);
    // Aquí puedes agregar la lógica para autenticar a la Unidad/Departamento
    this.router.navigate(['/app']);
    this.onLogin();
  }
  
}