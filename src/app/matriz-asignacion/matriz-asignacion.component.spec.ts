import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrizAsignacionComponent } from './matriz-asignacion.component';

describe('MatrizAsignacionComponent', () => {
  let component: MatrizAsignacionComponent;
  let fixture: ComponentFixture<MatrizAsignacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatrizAsignacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatrizAsignacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
