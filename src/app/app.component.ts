import { Component , Inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CriterioComponent } from './criterio/criterio.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { RestService } from './rest.service';
import { CommonModule } from '@angular/common';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';

@Component({
  selector: 'app-root',
  standalone: true,  
  providers: [],
  imports: [RouterOutlet,
              MatToolbarModule,
              MatIconModule,
              MatButtonModule,
              MatSidenavModule,
              MatListModule,
              RouterModule,
              MatCardModule,
              CommonModule,
              InicioSesionComponent,
              CriterioComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ssp';
  showFiller = false;
  pageTitle!: String;
  isLoggedIn = false;

  onLoginSuccess() {
    this.isLoggedIn = true;
  }
}
