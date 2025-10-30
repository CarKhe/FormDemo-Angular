import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterOutlet } from '@angular/router';
import { GenericInput } from './shared/components/generic-input/generic-input';
import { GenericButton } from './shared/components/generic-button/generic-button';
import { GenericSelect } from "./shared/components/generic-select/generic-select";
import { GenericCard } from "./shared/components/generic-card/generic-card";
import { TablaUsuario } from "./pages/tabla-usuario/tabla-usuario";
import { ModalAcciones } from "./pages/modal-acciones/modal-acciones";
import { SnackbarService } from './shared/services/snackbar-service';
import { GenericLoader } from "./shared/components/generic-loader/generic-loader";

@Component({
  selector: 'app-root',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule, GenericInput, GenericButton, GenericSelect,
    GenericCard,
    TablaUsuario,
    ModalAcciones,
    GenericLoader
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private snackbar = inject(SnackbarService);
  protected title = 'FormDemo';
  formulario: FormGroup;

  roles = [
    { id: 1, nombre: 'Administrador' },
    { id: 2, nombre: 'Usuario' },
    { id: 3, nombre: 'Invitado' }
  ];

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: [''],
      correo: [''],
      telefono: [''],
      rol:['']
    });
  }

  cargando = false;

  ngOnInit() {
    this.cargando = true;

    setTimeout(() => {
      this.cargando = false;
    }, 2000);
  }
  
  cancelar(){
    this.snackbar.show('Cancelado', 'warning');
  }
  guardar() {
    this.snackbar.show('Formulario incompleto', 'success');
    const resultado = this.formulario.value;
    console.log('JSON result:', resultado);
    //alert('Datos en JSON:\n' + JSON.stringify(resultado, null, 2));
  }
}
