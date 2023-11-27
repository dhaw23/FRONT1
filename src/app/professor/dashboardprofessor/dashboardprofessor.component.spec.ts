import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardprofessorComponent } from './dashboardprofessor.component';

describe('DashboardprofessorComponent', () => {
  let component: DashboardprofessorComponent;
  let fixture: ComponentFixture<DashboardprofessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardprofessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardprofessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
