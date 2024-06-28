import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogIndicadoresComponent } from './dialog-indicadores.component';

describe('DialogIndicadoresComponent', () => {
  let component: DialogIndicadoresComponent;
  let fixture: ComponentFixture<DialogIndicadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogIndicadoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogIndicadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
