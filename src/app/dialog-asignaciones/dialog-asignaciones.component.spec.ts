import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAsignacionesComponent } from './dialog-asignaciones.component';

describe('DialogAsignacionesComponent', () => {
  let component: DialogAsignacionesComponent;
  let fixture: ComponentFixture<DialogAsignacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogAsignacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAsignacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
