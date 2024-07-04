import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MatHeaderCell, MatHeaderCellDef, MatRow, MatRowDef, MatTable } from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs'; 
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { RestService } from '../rest.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-matriz-asignacion',
  standalone: true,
  imports: [
    MatTable,
    MatCheckboxModule,
    MatTabsModule,
    MatHeaderCell,
    MatHeaderCellDef,
    MatRow,
    MatRowDef,
    MatFormField,
    MatLabel,
    FormsModule,
    CommonModule
  ],
  templateUrl: './matriz-asignacion.component.html',
  styleUrls: ['./matriz-asignacion.component.css']
})
export class MatrizAsignacionComponent {

  unidades: any[] = [];
  indicadores: any[] = [];
  matriz: any[][] = [];

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.restService.getUnidades().subscribe(unidades => {
      this.unidades = unidades;
      this.crearMatriz();
    });
  

    this.restService.getIndicadores().subscribe(indicadores => {
      this.indicadores = indicadores;
      this.crearMatriz();
    });
  }

  crearMatriz(): void {
    if (this.unidades.length && this.indicadores.length) {
      this.matriz = this.unidades.map(() => new Array(this.indicadores.length).fill(null));
    }
  }

}
