import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderprofessorComponent } from './headerprofessor.component';

describe('HeaderprofessorComponent', () => {
  let component: HeaderprofessorComponent;
  let fixture: ComponentFixture<HeaderprofessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderprofessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderprofessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
