import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatCard } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogUnidadesComponent } from '../dialog-unidades/dialog-unidades.component';
import { DialogEditUnidadesComponent } from '../dialog-edit-unidades/dialog-edit-unidades.component';
import { MatButtonModule } from '@angular/material/button';

export interface UnidadData {
  id: number;
  nombre: string;
  responsable: string;
  correo: string;
  contrasenia: string;
}

const ELEMENT_DATA: UnidadData[] = [
  {id: 1, nombre: 'Emmanu', responsable: 'Sustentabilidad', correo: 'admin@gmail.com', contrasenia: 'dpto' },
  {id: 2, nombre: 'Franklin', responsable: 'Informatica', correo: 'admin@gmail.com', contrasenia: 'dpto'},
  {id: 3, nombre: 'Henrri', responsable: 'Sustentabilidad', correo: 'admin@gmail.com', contrasenia: 'dpto'},
  // add more data if needed
];

@Component({
  selector: 'app-unidades',
  standalone: true,
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.css'],
  imports: [
    MatFormFieldModule, 
    MatInputModule, 
    MatIconModule, 
    MatCardModule,
    MatCard, 
    MatTableModule, 
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class UnidadesComponent implements AfterViewInit{
  displayedColumns: string[] = ['id', 'nombre', 'responsable', 'correo', 'contrasenia', 'accion'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  constructor(public dialog: MatDialog) { }
  registrarDialog() {
    let dialogRef = this.dialog.open(DialogUnidadesComponent, {data:{name:'Yara'}});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  modificarDialog() {
    let dialogRef = this.dialog.open(DialogEditUnidadesComponent, {data:{name:'Yara'}});

  }
}