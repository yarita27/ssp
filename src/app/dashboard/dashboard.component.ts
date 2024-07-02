import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatPaginator } from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RestService } from '../rest.service';
import { CommonModule } from '@angular/common';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



export interface Criterio {
  id: number;
  nombre: string;
  descripcion: string;
  estado: boolean;
}
const ELEMENT_DATAs: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},

];


/**
 * @title Table with filtering
 */

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatCardModule,MatCard,MatPaginator,MatPaginatorModule,CommonModule]
})
export class DashboardComponent implements AfterViewInit, OnInit{

  data : any [] = [];
  ELEMENT_DATA: Criterio[] = [];
  ngOnInit(): void {
    this.cargarCriterios();
  }

  cargarCriterios(){
    this.restService.getCriterios().subscribe({
      next: (result : Criterio[]) => {
        console.log(result);
        result.forEach((element) => {
          this.ELEMENT_DATA.push(element);
        }
        );
        console.log("Criterios"); 
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'estado'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

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

  constructor(private restService: RestService){}



}

