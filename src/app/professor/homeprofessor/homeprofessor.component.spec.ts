import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeprofessorComponent } from './homeprofessor.component';

describe('HomeprofessorComponent', () => {
  let component: HomeprofessorComponent;
  let fixture: ComponentFixture<HomeprofessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeprofessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeprofessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
