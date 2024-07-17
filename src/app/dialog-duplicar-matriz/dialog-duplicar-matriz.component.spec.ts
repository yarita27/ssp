import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDuplicarMatrizComponent } from './dialog-duplicar-matriz.component';

describe('DialogDuplicarMatrizComponent', () => {
  let component: DialogDuplicarMatrizComponent;
  let fixture: ComponentFixture<DialogDuplicarMatrizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogDuplicarMatrizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDuplicarMatrizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
