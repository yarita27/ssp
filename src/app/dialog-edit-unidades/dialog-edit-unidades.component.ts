import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatLabel } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { Unidad } from '../unidades/unidades.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSelect } from '@angular/material/select';

interface Estado {
  value: boolean;
  viewValue: string;
}

export class FormFieldPrefixSuffixExample {
  hide = true;
}

@Component({
  selector: 'app-dialog-edit-unidades',
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
  templateUrl: './dialog-edit-unidades.component.html',
  styleUrl: './dialog-edit-unidades.component.css'
})
export class DialogEditUnidadesComponent {
  hide: any;
  estados: Estado[] = [
    {value: false, viewValue: 'Desactivado'},
    {value: true, viewValue: 'Activado'},
  ];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any){

  }
  onInit(){

  }
}
