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
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DialogEditCriteriosComponent } from '../dialog-edit-criterios/dialog-edit-criterios.component';

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
            MatCheckboxModule,
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

  modificarDialog(criterio : Criterio) {
    let dialogRef = this.dialog.open(DialogEditCriteriosComponent, {data:{criterio:criterio}});
    console.log(criterio);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  eliminarPrevio(value : any) : void{
    console.log(value);
    this.eliminarCriterio(value.id);
    console.log("Eliminando Criterio...");
  }

  eliminarCriterio(id: number){
    
    this.restService.deleteCriterio(id).subscribe({
      next: (result) => {
        console.log(result);
        this.cargarCriterios();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
