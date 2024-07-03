import { CommonModule } from '@angular/common';
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatCard } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogEditUnidadesComponent } from '../dialog-edit-unidades/dialog-edit-unidades.component';
import { MatButtonModule } from '@angular/material/button';
import {DialogCriteriosComponent} from '../dialog-criterios/dialog-criterios.component';
import { RestService } from '../rest.service';

export interface Criterio {
  "id": number;
  "nombre": string;
  "descripcion": string;
  "estado": boolean;
}



@Component({
  selector: 'app-criterio',
  templateUrl: './criterio.component.html',
  styleUrls: ['./criterio.component.css'],
  standalone: true,
  imports: [CommonModule,
            MatIconModule,
            MatCardModule,
            MatFormFieldModule,
            MatGridListModule,
            MatInputModule,
            MatTableModule,

            MatPaginatorModule,
            MatDialogModule,
            MatButtonModule,
            MatCardModule,
            MatCard,
            DialogEditUnidadesComponent,
            DialogCriteriosComponent
  ]
  
})
export class CriterioComponent implements AfterViewInit, OnInit{
  constructor(
    public dialog: MatDialog,
    private restService: RestService
  ) {}

  listaCriterios : Criterio[] = [];
  
  ngOnInit(): void {
    this.cargarCriterios();
  }
  
  cargarCriterios(){
    this.restService.getCriterios().subscribe({
      next: (result : any) => {
        this.listaCriterios = result;
        this.dataSource = new MatTableDataSource(this.listaCriterios);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }


  eliminarCriterio(value : any) : void{ 
    this.restService.deleteCriterio(value).subscribe(
      (result) => {
        console.log(result);
      }
    );
  }

  eliminarPrevio(value : any) : void{
    //Aqui va el proceso previo a la eliminacion donde se toma los datos directo desde la tabla
    //y se envia el id del criterio a eliminar , value es el objeto completo que tiene la 
    //informacion del criterio en la fila seleccionada
  };
  
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'estado', 'accion'];
  dataSource = new MatTableDataSource(this.listaCriterios);

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
    let dialogRef = this.dialog.open(DialogCriteriosComponent, {data:{name:'Yara'}});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  modificarDialog() {
    let dialogRef = this.dialog.open(DialogEditUnidadesComponent, {data:{name:'Yara'}});

  }
}
