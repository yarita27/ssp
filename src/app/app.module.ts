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
import { AppComponent } from './app.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
//import { AuthGuard } from './auth.guard';
//import { AppRoutingModule } from './app.routes';

@NgModule({
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
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      MatPaginatorModule,
      MatSortModule,
      MatDialogModule,
      MatSelectModule,
      MatTabsModule,
      CommonModule,
      MatTooltipModule,
      //AppRoutingModule,
      AppComponent,
      InicioSesionComponent,
    ],
    declarations: [
    ],
  providers: [
    //AuthGuard
  ],
})
export class AppModule { }