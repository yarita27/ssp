import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormField, MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
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
import { MatIconModule } from '@angular/material/icon';
import { Asignacion } from '../dialog-matriz/dialog-matriz.component';


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
    MatIconModule,
    
  ],
  providers: [
    FormControl,
    ReactiveFormsModule,
  ],
  templateUrl: './dialog-asignaciones.component.html',
  styleUrl: './dialog-asignaciones.component.css'
})
export class DialogAsignacionesComponent implements OnInit {


  form: FormGroup = new FormGroup({});

  criterioControl = new FormControl([]);
  indicadorControl = new FormControl([]);
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
      anio: null, // Provide a default value for the 'anio' property
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

  editarPrevio(value: any){
    console.log(value);
    this.editarAsignacion(value);
    console.log("Editando Asignacion...");
  }

  editarAsignacion(value : Asignacion) : void{
    this.restService.updateAsignacion(value).subscribe(
      (result) => {
        console.log(result);
      }
    );
  }

  //TODAVIDA NO ESTA DESARROLLADOOOOOOOOOOOOOOO
  registrarPrevio() : void{
    console.log('Año:', this.form.value.anio);
    console.log('Criterios seleccionados:', this.criteriosSeleccionados);
    console.log('Indicadores seleccionados:', this.indicadoresSeleccionados);
    console.log('Unidades seleccionadas:', this.unidadesSeleccionadas);
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
