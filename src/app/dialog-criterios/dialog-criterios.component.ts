import { Component , Inject, model, } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import {  MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';
import { MatOption, MatOptionModule } from '@angular/material/core';
import { Criterio } from '../criterio/criterio.component';
import { RestService } from '../rest.service';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';

interface Estado {
  value: boolean;
  viewValue: string;
}

@Component({
  selector: 'app-dialog-criterios',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormField,
    MatFormFieldModule,
    MatLabel,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatSelect,
    MatOptionModule,
    MatOption,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatCheckboxModule
  ],
  templateUrl: './dialog-criterios.component.html',
  styleUrl: './dialog-criterios.component.css'
})
export class DialogCriteriosComponent {
  readonly checked = model(false);
  isChecked = true;
  onSubmit() {
    throw new Error('Method not implemented.');
  }

  estados: Estado[] = [
    {value: false, viewValue: 'Desactivado'},
    {value: true, viewValue: 'Activado'},
  ];


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private restService: RestService){
  }

  registrarCriterio(value : Criterio) : void{
    this.restService.postCriterio(value).subscribe(
      (result) => {
        console.log(result);
      }
    );
  };



  registrarPrevio(value: any) : void{
    console.log(value);
    this.registrarCriterio(value);
    console.log("Guardando criterio...");
    /*let buffer: Criterio = {id: 0, nombre: '', descripcion: '', estado: false};
    buffer.id = value.id;
    buffer.nombre = value.nombre;
    buffer.descripcion = value.descripcion;
    buffer.estado = value.estado;
    console.log(buffer);*/
  }

  onInit(){
  }

}
