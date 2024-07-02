import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatCard } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogUnidadesComponent } from '../dialog-unidades/dialog-unidades.component';
import { DialogEditUnidadesComponent } from '../dialog-edit-unidades/dialog-edit-unidades.component';
import { MatButtonModule } from '@angular/material/button';
import { RestService } from '../rest.service';
import { MatTooltip } from '@angular/material/tooltip';
import { NgClass } from '@angular/common';

export interface Unidad {
  id: number;
  nombre: string;
  responsable: string;
  correo: string;
  contrasena: string;
  estado: boolean;
} 


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
    MatButtonModule,
    MatTooltip,
    NgClass
  ]
})
export class UnidadesComponent implements AfterViewInit, OnInit{

  constructor(
    public dialog: MatDialog,
    private restService: RestService
  ) {}
  
  listaUnidades : Unidad[] = [];

  ngOnInit(): void {
    this.cargarUnidades();
  }


  cargarUnidades(){
    this.restService.getUnidades().subscribe({
      next: (result : Unidad[]) => {
        console.log(result);
        this.listaUnidades = result;
        console.log(this.listaUnidades);
      }
    });
    this.dataSource = new MatTableDataSource(this.listaUnidades);
  }

  


  displayedColumns: string[] = ['id', 'nombre', 'responsable', 'correo', 'contrasena', 'estado', 'accion'];
  dataSource = new MatTableDataSource(this.listaUnidades);

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