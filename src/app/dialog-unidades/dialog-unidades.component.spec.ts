import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUnidadesComponent } from './dialog-unidades.component';

describe('DialogUnidadesComponent', () => {
  let component: DialogUnidadesComponent;
  let fixture: ComponentFixture<DialogUnidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogUnidadesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogUnidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
