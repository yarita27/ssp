import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatOption, MatOptionModule } from '@angular/material/core';
import { RestService } from '../rest.service';
import { Unidad } from '../unidades/unidades.component';
import { Indicador } from '../indicadores/indicadores.component';
import { Criterio } from '../criterio/criterio.component';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-dialog-asignaciones',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormField,
    MatFormFieldModule,
    MatLabel,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelect,
    MatOptionModule,
    MatOption,
    MatListModule,
    MatSelectModule,
  ],
  providers: [
    FormControl,
    ReactiveFormsModule
  ],
  templateUrl: './dialog-asignaciones.component.html',
  styleUrl: './dialog-asignaciones.component.css'
})
export class DialogAsignacionesComponent implements OnInit {

  control = new FormControl('');
  form: FormGroup = new FormGroup({});
  unidadesActivas: Unidad[] = [];
  indicadoresActivos: Indicador[] = [];
  criteriosActivos: Criterio[] = [];
  
  chequeado: boolean = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private restService: RestService
  ) {}



  ngOnInit(): void {
    this.cargarCriteriosActivos();
    this.cargarUnidadesActivas();
    this.cargarIndicadoresActivos();


  }

  //TODAVIDA NO ESTA DESARROLLADOOOOOOOOOOOOOOO
  registrarPrevio() : void{
    const formData = this.form.value;
    console.log('Año:', formData.anio);
    console.log('Criterios seleccionados:', formData);
    console.log('Indicadores seleccionados:', formData.id_indicador);
    console.log('Unidades seleccionadas:', formData.id_unidad);
  }

  cargarUnidadesActivas() : void{
    this.restService.getUnidadesActivas().subscribe({
      next: (result : any) => {
        this.unidadesActivas = result;
      },
      error : (err) => {
        console.error(err);
      }
    });
  }

  cargarIndicadoresActivos() : void{
    this.restService.getIndicadoresActivos().subscribe({
      next: (result : any) => {
        this.indicadoresActivos = result;
      },
      error : (err) => {
        console.error(err);
      }
    });
  }

  cargarCriteriosActivos() : void{
    this.restService.getCriteriosActivos().subscribe({
      next: (result : any) => {
        this.criteriosActivos = result;
      },
      error : (err) => {
        console.error(err);
      }
    });
  }
}
