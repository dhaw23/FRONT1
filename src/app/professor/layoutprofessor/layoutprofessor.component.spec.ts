import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutprofessorComponent } from './layoutprofessor.component';

describe('LayoutprofessorComponent', () => {
  let component: LayoutprofessorComponent;
  let fixture: ComponentFixture<LayoutprofessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutprofessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutprofessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
