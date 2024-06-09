import { Routes } from '@angular/router';
import { CriterioComponent } from './criterio/criterio.component';
import { IndicadoresComponent } from './indicadores/indicadores.component';

export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },

    {
        path:"criterios",
        component:CriterioComponent
    },

    {
        path:"indicadores",
        component:IndicadoresComponent
    }
];
