import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RestService } from '../rest.service';
import { Unidad } from '../unidades/unidades.component';
import { Indicador } from '../indicadores/indicadores.component';
import { Criterio } from '../criterio/criterio.component';

@Component({
  selector: 'app-dialog-asignaciones',
  standalone: true,
  imports: [],
  templateUrl: './dialog-asignaciones.component.html',
  styleUrl: './dialog-asignaciones.component.css'
})
export class DialogAsignacionesComponent implements OnInit {

  unidadesActivas: Unidad[] = [];
  indicadoresActivos: Indicador[] = [];
  criteriosActivos: Criterio[] = [];
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private restService: RestService
  ) {}



  ngOnInit(): void {
    this.cargarCriteriosActivos();
    this.cargarUnidadesActivas();
    this.cargarIndicadoresActivos();
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
