import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatLabel } from '@angular/material/form-field';

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
    MatInputModule

  ],
  templateUrl: './dialog-edit-unidades.component.html',
  styleUrl: './dialog-edit-unidades.component.css'
})
export class DialogEditUnidadesComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){

  }
  onInit(){

  }
}
