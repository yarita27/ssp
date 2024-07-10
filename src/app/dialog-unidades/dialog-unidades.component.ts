import { Component , Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { Indicador } from '../indicadores/indicadores.component';
import { Criterio } from '../criterio/criterio.component';
import { RestService } from '../rest.service';
import { Unidad } from '../unidades/unidades.component';

export class FormFieldPrefixSuffixExample {
  hide = true;
}
@Component({
  selector: 'app-dialog-unidades',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormField,
    MatFormFieldModule,
    MatLabel,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatIconModule,

  ],
  templateUrl: './dialog-unidades.component.html',
  styleUrl: './dialog-unidades.component.css'
})
export class DialogUnidadesComponent implements OnInit{
  hide: any;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private restService: RestService
  ){

  }
  ngOnInit(): void {

  }
  onInit(){

  }

  registrarUnidad(value : Unidad) : void{
    this.restService.postUnidad(value).subscribe(
      (result) => {
        console.log(result);
      }
    );
  };

  registrarPrevio(value: any) : void{
    console.log(value);
    this.registrarUnidad(value);
    console.log("Guardando Unidad...");
  }
 

}
