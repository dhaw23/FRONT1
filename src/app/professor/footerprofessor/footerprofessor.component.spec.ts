import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterprofessorComponent } from './footerprofessor.component';

describe('FooterprofessorComponent', () => {
  let component: FooterprofessorComponent;
  let fixture: ComponentFixture<FooterprofessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterprofessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterprofessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
