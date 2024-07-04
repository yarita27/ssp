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
        component:DashboardComponent
    },

    {
        path:"unidades",
        component:UnidadesComponent
    },

    {
        path:"criterios",
        component:CriterioComponent
    },

    {
        path:"indicadores",
        component:IndicadoresComponent
    },

    {
        path:"asignar",
        component:MatrizAsignacionComponent
    },

    {
        path:"asignaciones",
        component:AsignacionesComponent
    }, 

    {
        path:"otro",
        component:OtroComponent
    }, 
];
