import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDashboardPostItemComponent } from './single-dashboard-post-item.component';

describe('SingleDashboardPostItemComponent', () => {
  let component: SingleDashboardPostItemComponent;
  let fixture: ComponentFixture<SingleDashboardPostItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleDashboardPostItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDashboardPostItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
