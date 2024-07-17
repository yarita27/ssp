import { Component, OnInit, Inject, TrackByFunction } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatOption, MatOptionModule } from '@angular/material/core';
import { RestService } from '../rest.service';
import { Unidad } from '../unidades/unidades.component';
import { Indicador } from '../indicadores/indicadores.component';
import { Criterio } from '../criterio/criterio.component';
import { MatListModule } from '@angular/material/list';
import { Asignacion } from '../dialog-matriz/dialog-matriz.component';
import { NgFor, NgForOf } from '@angular/common';


@Component({
  selector: 'app-dialog-duplicar-matriz',
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
    NgForOf,
    NgFor,
  ],
  templateUrl: './dialog-duplicar-matriz.component.html',
  styleUrl: './dialog-duplicar-matriz.component.css'
})
export class DialogDuplicarMatrizComponent {

  aniosAsignados: number[] = [];
  anioPrueba: number = 2021;
 // trackByFn: TrackByFunction<number> = (index, item) => item;

  constructor(
    private restService: RestService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    this.cargarAniosAsignados();
  }


  cargarAniosAsignados() : void{
    this.restService.getAniosAsignados().subscribe({
      next: (result : any) => {
        this.aniosAsignados = result;
      },
      error : (err) => {
        console.error(err);
      }
    });
  }

  seleccionarAnio(value: any): void {
    this.anioPrueba = value.anio;
    this.duplicarMatriz();
  }

  duplicarMatriz() {
    this.restService.duplicarMatriz(this.anioPrueba).subscribe({
      next: (result: any) => {
        console.log(result);
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }

}
