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
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { DialogMatrizComponent } from '../dialog-matriz/dialog-matriz.component';
import { MatIconModule } from '@angular/material/icon';
import { DialogDuplicarMatrizComponent } from '../dialog-duplicar-matriz/dialog-duplicar-matriz.component';
import { DialogDeleteMatrizComponent } from '../dialog-delete-matriz/dialog-delete-matriz.component';

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
    MatOptionModule,
    MatLabel,
    FormsModule,
    CommonModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule
  ],
  templateUrl: './matriz-asignacion.component.html',
  styleUrls: ['./matriz-asignacion.component.css']
})
export class MatrizAsignacionComponent {

  unidades: Unidad[] = [];
  indicadores: Indicador[] = [];
  matriz: Asignacion[][] = [];
  asignaciones: Asignacion[] = [];


  aniosAsignados: number[] = [];
  anioPrueba: number = new Date().getFullYear() -1;
  //anioPrueba: number = new Date().getFullYear();

  constructor(
    private restService: RestService,
    public dialog: MatDialog
  ) { }

  registrarDialog() {
    let dialogRef = this.dialog.open(DialogMatrizComponent, {data:{name:'Yara'}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  duplicarDialog() {
    let dialogRef = this.dialog.open(DialogDuplicarMatrizComponent, {data:{name:'Yara'}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result
      }`);
    });
  }

  eliminarDialog() {
    let dialogRef = this.dialog.open(DialogDeleteMatrizComponent, {data:{name:'Yara'}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result
      }`);
    });
  }

  ngOnInit(): void {
    console.log(this.anioPrueba);
    this.inicializarMatriz();
  }

  inicializarMatriz(): void {
    this.cargarAniosAsignados();


    this.restService.getAsignacionesByAnio(this.anioPrueba).subscribe(asignaciones => {
      this.asignaciones = asignaciones;
      this.crearMatriz();
    });

    this.restService.getUnidadesByAnio(this.anioPrueba).subscribe(unidades => {
      this.unidades = unidades;
      this.crearMatriz();
    });
  

    this.restService.getIndicadoresByAnio(this.anioPrueba).subscribe(indicadores => {
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

  seleccionarAnio(value: number): void {
    this.anioPrueba = value;
    this.inicializarMatriz();
  }

  toggleRecomendado(i: number, j: number): void {
    // Actualiza el estado de recomendado en la matriz
    const estadoRecomendado = this.matriz[i][j].recomendado;
  
    // Encuentra la asignación correspondiente en el arreglo de asignaciones y actualiza su estado
    const asignacion = this.asignaciones.find(asignacion => 
      asignacion.id_unidad === this.unidades[i].id && 
      asignacion.id_indicador === this.indicadores[j].id && 
      asignacion.id_criterio === this.indicadores[j].id_criterio
    );
  
    if (asignacion) {
      asignacion.recomendado = estadoRecomendado;
    }
  }

  guardarAsignaciones(): void {
    // Envía las asignaciones modificadas al servidor
    this.restService.guardarMatriz(this.asignaciones).subscribe({
      next: response => {
        console.log('Asignaciones guardadas', response);
      },
      error: error => {
        console.error('Error al guardar asignaciones', error);
      }
    });
  }



}
