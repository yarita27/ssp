import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMatrizComponent } from './dialog-matriz.component';

describe('DialogMatrizComponent', () => {
  let component: DialogMatrizComponent;
  let fixture: ComponentFixture<DialogMatrizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogMatrizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogMatrizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
