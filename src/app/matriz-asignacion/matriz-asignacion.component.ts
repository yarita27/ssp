import { Component } from '@angular/core';

@Component({
  selector: 'app-matriz-asignacion',
  standalone: true,
  templateUrl: './matriz-asignacion.component.html',
  styleUrls: ['./matriz-asignacion.component.css']
})
export class MatrizAsignacionComponent {
  departments = ['Departamento A', 'Departamento B', 'Departamento C'];
  indicators = ['Indicador 1', 'Indicador 2', 'Indicador 3'];
  assignments: { [key: string]: string[] } = {};

  constructor() {
    this.departments.forEach(department => {
      this.assignments[department] = [];
    });
  }

  submitAssignments() {
    console.log('Asignaciones:', this.assignments);
  }
}
