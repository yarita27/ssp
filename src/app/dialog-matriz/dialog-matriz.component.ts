import { Component, OnInit, Inject } from '@angular/core';
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
import { error } from 'console';
import { subscribe } from 'diagnostics_channel';

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
  selector: 'app-dialog-matriz',
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
      MatSelectModule
    ],
  providers: [
    FormControl,
    ReactiveFormsModule
  ],
  templateUrl: './dialog-matriz.component.html',
  styleUrl: './dialog-matriz.component.css'
})
export class DialogMatrizComponent  implements OnInit {


  form: FormGroup = new FormGroup({});

  criterioControl = new FormControl([]);
  indicadorControl = new FormControl<Indicador[]>([]);
  unidadControl = new FormControl([]);

  unidadesActivas: Unidad[] = [];
  indicadoresActivos: Indicador[] = [];
  criteriosActivos: Criterio[] = [];
  
  criteriosSeleccionados : Criterio[] = [];
  indicadoresSeleccionados: Indicador[] = [];
  unidadesSeleccionadas: Unidad[] = [];

  chequeado: boolean = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private restService: RestService,
    private fb: FormBuilder
  ) {}



  ngOnInit(): void {
    this.cargarCriteriosActivos();
    this.cargarUnidadesActivas();
    this.cargarIndicadoresActivos();

    this.form = this.fb.group({
      anio: null,
      id_criterio: this.criterioControl,
      id_indicador: this.indicadorControl,
      id_unidad: this.unidadControl
    });

    this.criterioControl.valueChanges.subscribe((selectedCriterios: any) => {
      this.criteriosSeleccionados = selectedCriterios;
    });
    
    this.indicadorControl.valueChanges.subscribe((selectedIndicadores: any) => {
      this.indicadoresSeleccionados = selectedIndicadores!;
    });

    this.unidadControl.valueChanges.subscribe((selectedUnidades: any) => {
      this.unidadesSeleccionadas = selectedUnidades || [];
    });
    
  }


  registrarPrevio(): void {
    const anio = this.form.value.anio;
    const asignaciones: Asignacion[] = [];

    this.unidadesSeleccionadas.forEach(unidad => {
        const id_unidad = unidad.id;
        this.indicadoresSeleccionados.forEach(id_indicador => {
            const indicador = this.indicadoresActivos.find(ind => ind.id === id_indicador.id && ind.id_criterio === id_indicador.id_criterio);
            if (indicador) {
                const id_criterio = indicador.id_criterio;

                    const asignar: Asignacion = {
                        anio,
                        id_unidad: id_unidad,
                        id_indicador: id_indicador.id,
                        id_criterio: id_criterio,
                        recomendado: false,
                        doc_respuesta: null,
                        fecha_respuesta: null,
                        completado: false
                    };
                    asignaciones.push(asignar);
                
            }
        });
    });

    console.log('Asignaciones:', asignaciones);
    
    this.restService.registrarMatrizAsignaciones(asignaciones).subscribe({
      next: (result : any) => {
        console.log('Asignaciones:', result);
      },
      error : (err: any) => {
        console.error(err);
      }
    });
  }

  onCriterioChange(event: any): void {
    const selectedCriterios = event?.value || [];
    const selectedIndicadores = this.indicadoresActivos.filter(indicador =>
      selectedCriterios.some((criterio: { id: number; }) => criterio.id === indicador.id_criterio)
    );
    this.indicadorControl.setValue(selectedIndicadores);
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
