import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { AppComponent } from './app.component'; // Import AppComponent


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
    IndicadoresComponent 
  ],
  providers: [],

})
export class AppModule {

}