import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatCard } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogEditUnidadesComponent } from '../dialog-edit-unidades/dialog-edit-unidades.component';
import { DialogIndicadoresComponent } from '../dialog-indicadores/dialog-indicadores.component';
import { DialogCriteriosComponent } from '../dialog-criterios/dialog-criterios.component';
import { RestService } from '../rest.service';
import { DialogEditIndicadoresComponent } from '../dialog-edit-indicadores/dialog-edit-indicadores.component';

export interface Indicador {
  id_criterio: number;
  id: number;
  nombre: string;
  descripcion: string;
  doc_pregunta: string;
  estado: boolean;
}


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
    FormsModule,
    MatPaginatorModule,
    MatDialogModule,
    MatCard,
    MatPaginator,
    DialogEditUnidadesComponent,
    DialogIndicadoresComponent,
    DialogCriteriosComponent

  ],
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.css']
})
export class IndicadoresComponent implements AfterViewInit, OnInit{
  listaIndicadores: Indicador[] = [];

  ngOnInit(): void {
    this.cargarIndicadores();
  }
  
  cargarIndicadores(){
    this.restService.getIndicadores().subscribe({
      next: (result : any) => {
        this.listaIndicadores = result;
        this.dataSource = new MatTableDataSource(this.listaIndicadores);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  displayedColumns: string[] = ['id_criterio', 'id', 'nombre', 'descripcion', 'doc_respuesta', 'estado', 'accion'];
  dataSource = new MatTableDataSource(this.listaIndicadores);

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

  constructor(
    public dialog: MatDialog,
    private restService: RestService
  ) {}

  registrarDialog() {
    let dialogRef = this.dialog.open(DialogIndicadoresComponent, {data:{name:'Yara'}});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  modificarDialog(indicador : Indicador) {
    let dialogRef = this.dialog.open(DialogEditIndicadoresComponent, {data:{indicador:indicador}});
    console.log(indicador);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  eliminarPrevio(value : any) : void{
    console.log(value);
    this.eliminarIndicador(value.id_criterio, value.id);
    console.log("Eliminando Indicador...");
  }

  eliminarIndicador(id_criterio: number, id: number){
    
    this.restService.deleteIndicador(id_criterio, id).subscribe({
      next: (result) => {
        console.log(result);
        this.cargarIndicadores();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
