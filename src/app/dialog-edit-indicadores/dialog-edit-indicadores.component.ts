import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatLabel } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSelect } from '@angular/material/select';
import { RestService } from '../rest.service';
import { Indicador } from '../indicadores/indicadores.component';
import { Criterio } from '../criterio/criterio.component';

interface Estado {
  value: boolean;
  viewValue: string;
}

@Component({
  selector: 'app-dialog-edit-indicadores',
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
  templateUrl: './dialog-edit-indicadores.component.html',
  styleUrl: './dialog-edit-indicadores.component.css'
})
export class DialogEditIndicadoresComponent implements OnInit{
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
    this.editarIndicador(value);
    console.log("Editando Indicador...");
  }


  editarIndicador(value : Indicador) : void{
    this.restService.updateIndicador(value.id_criterio, value.id, value).subscribe(
      (result) => {
        console.log(result);
      }
    );
  };

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
        const file = input.files[0];
        // Manejar el archivo seleccionado
        this.data.indicador.doc_pregunta = file.name;
        // Puedes agregar lógica adicional para subir el archivo al servidor
    }

  }

  downloadFile(): void {
    const fileName = this.data.indicador.doc_pregunta;
    // Lógica para descargar el archivo
    // Por ejemplo, podrías hacer una solicitud HTTP para obtener el archivo desde el servidor
  }
}

/*
downloadFile() {
  const fileName = this.data.indicador.doc_pregunta;
  if (fileName) {
    // Lógica para descargar el archivo
    // Por ejemplo, si el archivo está almacenado en una URL:
    const url = `path/to/your/files/${fileName}`;
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
  }
}

onFileSelected(event: Event): void {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    const file = input.files[0];
    this.data.indicador.doc_pregunta = file.name;
  }

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

  let indicador : Indicador = {
    id: value.id,
    id_criterio: value.id_criterio,
    nombre: value.nombre,
    descripcion: value.descripcion,
    estado: true,
    doc_pregunta: ''
  };
  if(value.doc_pregunta != null){
    indicador.doc_pregunta = value.doc_pregunta;
  }
  this.registrarIndicador(value);
}
  */