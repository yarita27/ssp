import { Component , Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';
import { MatOption, MatOptionModule } from '@angular/material/core';

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
    MatOption
  ],
  templateUrl: './dialog-criterios.component.html',
  styleUrl: './dialog-criterios.component.css'
})
export class DialogCriteriosComponent {

  estados: Estado[] = [
    {value: false, viewValue: 'Desactivado'},
    {value: true, viewValue: 'Activado'},
  ];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any){

  }
  onInit(){

  }
}
