import { Component } from '@angular/core';
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
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,  
  providers: [RestService],
  imports: [RouterOutlet,
            MatToolbarModule,
            MatIconModule,
            MatButtonModule,
            MatSidenavModule,
            MatListModule,
            RouterModule,
            MatCardModule,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ssp';
  showFiller = false;

  ngOnInit():void{
    this.cargarIndicadores();
  }

  constructor(private RestService : RestService) { }

  public cargarIndicadores(){
   // this.RestService.getIndicadores().subscribe( (respuesta: any) => {console.log(respuesta)})
  }
}
