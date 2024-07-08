import { Component , Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';
import { MatOption, MatOptionModule } from '@angular/material/core';
import { RestService } from '../rest.service';
import { Indicador } from '../indicadores/indicadores.component';
import { Criterio } from '../criterio/criterio.component';

/*
interface Estado {
  value: boolean;
  viewValue: string;
}
*/
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
export class DialogIndicadoresComponent implements OnInit{
/*
  estados: Estado[] = [
    {value: false, viewValue: 'Desactivado'},
    {value: true, viewValue: 'Activado'},
  ];
*/
  criteriosActivos: Criterio[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private restService: RestService
  ){}

  ngOnInit(): void {
    this.cargarCriteriosActivos();
  }
  
  onInit() : void{
    
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    // Aquí puedes procesar el archivo según tus necesidades (por ejemplo, subirlo al servidor).
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

  registrarIndicador(value : Indicador) : void{
    this.restService.postIndicador(value).subscribe(
      (result) => {
        console.log(result);
      }
    );
  };

  registrarPrevio(value: any) : void{
    console.log(value);
    this.registrarIndicador(value);
    console.log("Guardando Indicador...");
  }
}
