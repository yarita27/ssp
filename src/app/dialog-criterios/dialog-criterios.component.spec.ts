import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCriteriosComponent } from './dialog-criterios.component';

describe('DialogCriteriosComponent', () => {
  let component: DialogCriteriosComponent;
  let fixture: ComponentFixture<DialogCriteriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogCriteriosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogCriteriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
