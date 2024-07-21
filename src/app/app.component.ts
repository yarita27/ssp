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
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

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
  isLoggedIn = false;
  pageTitle = '';
  userName = '';
  userType = ''; // 'admin' o 'unidad'

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.setPageTitle();
    });

    // Simulación de inicio de sesión
    //this.onLoginSuccess('admin', 'Henrri Uzcategui');
    // o
     this.onLoginSuccess('unidad', 'MARIO LOPEZ');
  }

  onLoginSuccess(userType: string, userName: string) {
    this.isLoggedIn = true;
    this.userType = userType;
    this.userName = userName;
  }

  setPageTitle() {
    const route = this.activatedRoute.firstChild;
    if (route) {
      const routeData = route.snapshot.data;
      this.pageTitle = routeData['title'] || '';
    }
  }
}
