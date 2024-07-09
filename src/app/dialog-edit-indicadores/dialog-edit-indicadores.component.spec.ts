import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditIndicadoresComponent } from './dialog-edit-indicadores.component';

describe('DialogEditIndicadoresComponent', () => {
  let component: DialogEditIndicadoresComponent;
  let fixture: ComponentFixture<DialogEditIndicadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEditIndicadoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditIndicadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
