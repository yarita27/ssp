import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MatHeaderCell, MatHeaderCellDef, MatRow, MatRowDef, MatTable } from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs'; 
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { RestService } from '../rest.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Unidad } from '../unidades/unidades.component';
import { Indicador } from '../indicadores/indicadores.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

export interface Asignacion {
  anio: number;
  id_unidad: number;
  id_criterio: number;
  id_indicador: number;
  recomendado: boolean;
  doc_respuesta: string | null;
  fecha_respuesta: Date | null;
  completado: boolean;

}

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
    CommonModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './matriz-asignacion.component.html',
  styleUrls: ['./matriz-asignacion.component.css']
})
export class MatrizAsignacionComponent {

  unidades: Unidad[] = [];
  indicadores: Indicador[] = [];
  matriz: Asignacion[][] = [];
  asignaciones: Asignacion[] = [];

  unidadesActivas: Unidad[] = [];
  indicadoresActivos: Indicador[] = [];
  
  constructor(
    private restService: RestService,
    public dialog: MatDialog
  ) { }

  

  ngOnInit(): void {
    const anioPrueba: number = 2021;

    this.restService.getAsignacionesByAnio(anioPrueba).subscribe(asignaciones => {
      this.asignaciones = asignaciones;
      this.crearMatriz();
    });

    this.restService.getUnidadesByAnio(anioPrueba).subscribe(unidades => {
      this.unidades = unidades;
      this.crearMatriz();
    });
  

    this.restService.getIndicadoresByAnio(anioPrueba).subscribe(indicadores => {
      this.indicadores = indicadores;
      this.crearMatriz();
    });
  }


  /**
   * Crea una matriz de asignaciones basada en las unidades y los indicadores disponibles.
   * Si hay unidades y indicadores disponibles, la matriz se crea asignando las asignaciones existentes
   * o creando nuevas asignaciones con valores predeterminados.
   */
  crearMatriz(): void {
    if (this.unidades.length && this.indicadores.length) {
      this.matriz = this.unidades.map(unidad => 
        this.indicadores.map(indicador => {
          const asignacionExistente = this.asignaciones.find(asignacion => 
            asignacion.id_unidad === unidad.id && 
            asignacion.id_indicador === indicador.id && 
            asignacion.id_criterio === indicador.id_criterio
          );
          return asignacionExistente ? asignacionExistente : {
            anio: new Date().getFullYear(),
            id_unidad: unidad.id,
            id_criterio: indicador.id_criterio,
            id_indicador: indicador.id,
            recomendado: false,
            doc_respuesta: null,
            fecha_respuesta: null,
            completado: false
          };
        })
      );
    }
  }

  toggleRecomendado(unidadIndex: number, indicadorIndex: number): void {
    this.matriz[unidadIndex][indicadorIndex].recomendado = !this.matriz[unidadIndex][indicadorIndex].recomendado;
  }

  guardarMatriz(): void {
    /*
    const matriz = this.matriz.map((fila, i) => fila.map((valor, j) => ({ id_unidad: this.unidades[i].id, id_indicador: this.indicadores[j].id, valor })));
    this.restService.guardarMatriz(matriz).subscribe({
      next: (result) => {
        console.log(result);
      },
      error: (err) => {
        console.error(err);
      }
    });
    */
  }

  guardarAsignaciones(): void {
    // Aquí puedes implementar la lógica para guardar las asignaciones, por ejemplo, enviándolas a un servidor
    console.log('Asignaciones guardadas', this.matriz);
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

}
