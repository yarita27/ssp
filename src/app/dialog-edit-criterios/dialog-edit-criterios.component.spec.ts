import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditCriteriosComponent } from './dialog-edit-criterios.component';

describe('DialogEditCriteriosComponent', () => {
  let component: DialogEditCriteriosComponent;
  let fixture: ComponentFixture<DialogEditCriteriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEditCriteriosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditCriteriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
