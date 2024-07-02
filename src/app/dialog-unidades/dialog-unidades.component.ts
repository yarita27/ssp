import { Component , Inject} from '@angular/core';
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
export class DialogUnidadesComponent {
hide: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any){

  }
  onInit(){

  }
 
}
