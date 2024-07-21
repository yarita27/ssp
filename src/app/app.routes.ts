import { Routes } from '@angular/router';
import { CriterioComponent } from './criterio/criterio.component';
import { IndicadoresComponent } from './indicadores/indicadores.component';
import { MatrizAsignacionComponent } from './matriz-asignacion/matriz-asignacion.component';
import { UnidadesComponent } from './unidades/unidades.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AsignacionesComponent } from './asignaciones/asignaciones.component';
import { OtroComponent } from './otro/otro.component';


export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },

    {
        path:"dashboard",
        component:DashboardComponent,
        data: { title: 'Asignaciones' }
    },

    {
        path:"unidades",
        component:UnidadesComponent,
        data: { title: 'Gestion de Unidades' }
    },

    {
        path:"criterios",
        component:CriterioComponent,
        data: { title: 'Gestion de Criterios' }
    },

    {
        path:"indicadores",
        component:IndicadoresComponent,
        data: { title: 'Gestion de Indicadores' }
    },

    {
        path:"designar",
        component:MatrizAsignacionComponent,
        data: { title: 'Gestion de Matriz de Asignacion' }
    },

    {
        path:"asignaciones",
        component:AsignacionesComponent,
        data: { title: 'Matriz de Asignacion' }
    }, 

    {
        path:"otro",
        component:OtroComponent,
        data: { title: 'Otros' }
    }, 
];
