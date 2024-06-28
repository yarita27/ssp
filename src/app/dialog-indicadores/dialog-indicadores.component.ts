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
  selector: 'app-dialog-indicadores',
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
  templateUrl: './dialog-indicadores.component.html',
  styleUrl: './dialog-indicadores.component.css'
})
export class DialogIndicadoresComponent {
  estados: Estado[] = [
    {value: false, viewValue: 'Desactivado'},
    {value: true, viewValue: 'Activado'},
  ];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any){

  }
  onInit(){

  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    // Aquí puedes procesar el archivo según tus necesidades (por ejemplo, subirlo al servidor).
  }

}
