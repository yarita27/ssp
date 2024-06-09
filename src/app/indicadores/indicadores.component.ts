import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';


export interface Indicador {
  idCriterio: number;
  idIndicador: number;
  nombre: string;
  descripcion: string;
  archivoAdjunto?: string;
  estado: boolean;
}

const ELEMENT_DATA: Indicador[] = [
  {idCriterio: 1, idIndicador: 101, nombre: 'Infraestructura', descripcion: 'Cell Data', archivoAdjunto: 'file1.pdf', estado: true},
  {idCriterio: 2, idIndicador: 102, nombre: 'Energía', descripcion: 'Cell Data', archivoAdjunto: 'file2.pdf', estado: false},
  {idCriterio: 3, idIndicador: 103, nombre: 'Desperdicio', descripcion: 'Cell Data', archivoAdjunto: 'file3.pdf', estado: true},
  {idCriterio: 4, idIndicador: 104, nombre: 'Agua', descripcion: 'Cell Data', archivoAdjunto: 'file4.pdf', estado: false}
];

@Component({
  selector: 'app-indicadores',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    FormsModule
  ],
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.css']
})
export class IndicadoresComponent {
  displayedColumns: string[] = ['idCriterio', 'idIndicador', 'nombre', 'descripcion', 'archivoAdjunto', 'estado'];
  dataSource = ELEMENT_DATA;
}
