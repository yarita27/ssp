import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

export interface Criterio {
  id: number;
  nombre: string;
  descripcion: string;
  estado: boolean;
}

const ELEMENT_DATA: Criterio[] = [
  {id: 1, nombre: 'Infraestructura', descripcion: 'Cell Data', estado: true},
  {id: 2, nombre: 'Energía', descripcion: 'Cell Data', estado: false},
  {id: 3, nombre: 'Desperdicio', descripcion: 'Cell Data', estado: true},
  {id: 4, nombre: 'Agua', descripcion: 'Cell Data', estado: false}
];

@Component({
  selector: 'app-criterio',
  templateUrl: './criterio.component.html',
  styleUrls: ['./criterio.component.css'],
  imports: [CommonModule,
            MatIconModule,
            MatCardModule,
            MatFormFieldModule,
            MatGridListModule,
            MatInputModule,
            MatTableModule
  ],
  standalone: true
})
export class CriterioComponent {
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'estado'];
  dataSource = ELEMENT_DATA;
}
