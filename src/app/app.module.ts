import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { CriterioComponent } from './criterio/criterio.component';
import { IndicadoresComponent } from './indicadores/indicadores.component';
import { AppComponent } from './app.component'; 
import { MatrizAsignacionComponent } from './matriz-asignacion/matriz-asignacion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';


import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { UnidadesComponent } from './unidades/unidades.component';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DialogUnidadesComponent } from './dialog-unidades/dialog-unidades.component';


@NgModule({
  declarations: [
  ],

  imports: [
    BrowserModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    CriterioComponent,
    IndicadoresComponent,
    MatrizAsignacionComponent,
    FormsModule,
    ReactiveFormsModule,
    MatPaginator,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatSelectModule,
    UnidadesComponent,
    MatPaginatorModule,
    CommonModule,
    MatTooltipModule,
    DashboardComponent,
    DialogUnidadesComponent
  ],
  providers: [],

})
export class AppModule {

}