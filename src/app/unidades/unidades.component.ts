import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';

export interface UnidadData {
  nombre: string;
  departamento: string;
  correo: string;
  rol: string;
}

const ELEMENT_DATA: UnidadData[] = [
  {nombre: 'Emmanu', departamento: 'Sustentabilidad', correo: 'admin@gmail.com', rol: 'dpto'},
  // más datos si es necesario
];

@Component({
  selector: 'app-unidades',
  standalone: true,
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.css'],
  imports: [MatPaginator, 
    MatIconModule
]
})
export class UnidadesComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'departamento', 'correo', 'rol', 'accion'];
  dataSource = new MatTableDataSource<UnidadData>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
