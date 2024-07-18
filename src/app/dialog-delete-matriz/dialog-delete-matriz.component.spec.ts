import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteMatrizComponent } from './dialog-delete-matriz.component';

describe('DialogDeleteMatrizComponent', () => {
  let component: DialogDeleteMatrizComponent;
  let fixture: ComponentFixture<DialogDeleteMatrizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogDeleteMatrizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDeleteMatrizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
