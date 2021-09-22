import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfectProjectsComponent } from './perfect-projects.component';

describe('PerfectProjectsComponent', () => {
  let component: PerfectProjectsComponent;
  let fixture: ComponentFixture<PerfectProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfectProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfectProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
