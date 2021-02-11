import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsEventComponent } from './students-event.component';

describe('StudentsEventComponent', () => {
  let component: StudentsEventComponent;
  let fixture: ComponentFixture<StudentsEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
