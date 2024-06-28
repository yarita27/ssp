import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditUnidadesComponent } from './dialog-edit-unidades.component';

describe('DialogEditUnidadesComponent', () => {
  let component: DialogEditUnidadesComponent;
  let fixture: ComponentFixture<DialogEditUnidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEditUnidadesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditUnidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
