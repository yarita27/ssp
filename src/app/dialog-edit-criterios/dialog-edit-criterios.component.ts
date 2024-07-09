import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatLabel } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSelect } from '@angular/material/select';
import { RestService } from '../rest.service';
import { Criterio } from '../criterio/criterio.component';

interface Estado {
  value: boolean;
  viewValue: string;
}

export class FormFieldPrefixSuffixExample {
  hide = true;
}

@Component({
  selector: 'app-dialog-edit-criterios',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormField,
    MatFormFieldModule,
    MatLabel,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatOptionModule,
    MatIconModule,
    MatSelect
  ],
  templateUrl: './dialog-edit-criterios.component.html',
  styleUrl: './dialog-edit-criterios.component.css'
})
export class DialogEditCriteriosComponent implements OnInit{
  ngOnInit(): void {
    // Add your initialization logic here
  }
  hide: any;
  estados: Estado[] = [
    {value: false, viewValue: 'Desactivado'},
    {value: true, viewValue: 'Activado'},
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private restService: RestService
  ){}     

  onInit(){
  }

  editarPrevio(value: any){
    console.log(value);
    this.editarCriterio(value);
    console.log("Editando Criterio...");
  }


  editarCriterio(value : Criterio) : void{
    this.restService.updateCriterio(value.id,value).subscribe(
      (result) => {
        console.log(result);
      }
    );
  };
}
