import { Component } from '@angular/core';

@Component({
  selector: 'app-otro',
  standalone: true,
  imports: [],
  templateUrl: './otro.component.html',
  styleUrl: './otro.component.css'
})
export class OtroComponent {
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
