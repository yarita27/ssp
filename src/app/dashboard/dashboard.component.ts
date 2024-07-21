import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MatHeaderCell, MatHeaderCellDef, MatRow, MatRowDef, MatTable } from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs'; 
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { RestService } from '../rest.service';
import { FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { Asignacion } from '../dialog-matriz/dialog-matriz.component';
import { Unidad } from '../unidades/unidades.component';
import { Indicador } from '../indicadores/indicadores.component';
import { DialogAsignacionesComponent } from '../dialog-asignaciones/dialog-asignaciones.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
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
  ]
})
export class DashboardComponent implements OnInit{

    unidades: Unidad[] = [];
    indicadores: Indicador[] = [];
    matriz: Asignacion[][] = [];
    asignaciones: Asignacion[] = [];
    listaAsignaciones : Asignacion[] = [];
  

    miUnidad: Unidad =  {
      id: 0,
      nombre: "",
      responsable: "",
      correo: "",
      contrasena: "",
      estado: false
    };
    idUnidad: number = 2;


    aniosAsignados: number[] = [];
    anioPrueba: number = new Date().getFullYear() -1;
    //anioPrueba: number = new Date().getFullYear();
  
    constructor(
      private restService: RestService,
      public dialog: MatDialog
    ) { }
  
    ngOnInit(): void {
      console.log(this.anioPrueba);
      this.inicializarMatriz();
      this.cargarUnidad();

      this.inicializarAsignaciones();
    }
  
    cargarUnidad(): void {
      this.restService.getUnidadById(this.idUnidad).subscribe({
        next: (unidad: Unidad) => {
          this.miUnidad = unidad;
          this.idUnidad = unidad.id;
          this.inicializarMatriz();
        },
        error: (err: any) => {
          console.error(err);
        }
      });
    }

    inicializarAsignaciones():void{

      this.cargarAniosAsignados();

      this.restService.getAsignacionesByAnioUnidad(this.anioPrueba,this.idUnidad).subscribe(asignaciones => {
        this.listaAsignaciones = asignaciones;
        console.log(asignaciones);
      });
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
        this.ordenarIndicadoresPorCriterio();
        this.crearMatriz();
      });
    }
    
    modificarAsignacion(unidadId: number, indicadorId: number) {
      console.log('Modificar asignación:', unidadId, indicadorId);
     
    }
  
    descargarArchivo(docPregunta: string) {
      const link = document.createElement('a');
      link.href = `path/to/files/${docPregunta}`;
      link.download = docPregunta;
      link.click();
    }
  
    subirArchivo(event: any, unidadId: number, indicadorIndex: number) {
      const file = event.target.files[0];
      console.log('Subir archivo:', file, unidadId, indicadorIndex);
      // Implementar lógica de subida de archivo
    }
  
    ordenarIndicadoresPorCriterio(): void {
      this.indicadores.sort((a, b) => a.id_criterio - b.id_criterio);
    }
  
    modificarDialog(asignacion : Asignacion) {
      let dialogRef = this.dialog.open(DialogAsignacionesComponent, {data:{asignacion:asignacion}});
      console.log(asignacion);
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
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
  
    toggleRecomendado(i: number, j: number): void {
      this.matriz[i][j].recomendado = !this.matriz[i][j].recomendado;
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
      this.inicializarAsignaciones();
    }
  }