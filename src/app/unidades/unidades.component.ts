import { Component} from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatCard } from '@angular/material/card';

export interface UnidadData {
  nombre: string;
  departamento: string;
  correo: string;
  rol: string;
  accion: string;
}

const ELEMENT_DATA: UnidadData[] = [
  {nombre: 'Emmanu', departamento: 'Sustentabilidad', correo: 'admin@gmail.com', rol: 'dpto', accion: 'Editar'},
  {nombre: 'Franklin', departamento: 'Informatica', correo: 'admin@gmail.com', rol: 'dpto', accion: 'Editar'},
  {nombre: 'Henrri', departamento: 'Sustentabilidad', correo: 'admin@gmail.com', rol: 'dpto', accion: 'Editar'},
  // más datos si es necesario
];

@Component({
  selector: 'app-unidades',
  standalone: true,
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.css'],
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule,MatCard, MatTableModule
  ]
})
export class UnidadesComponent {
  displayedColumns: string[] = ['nombre', 'departamento', 'correo', 'rol', 'accion'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}