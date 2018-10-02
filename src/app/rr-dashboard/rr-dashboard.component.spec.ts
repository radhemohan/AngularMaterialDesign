
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RrDashboardComponent } from './rr-dashboard.component';

describe('RrDashboardComponent', () => {
  let component: RrDashboardComponent;
  let fixture: ComponentFixture<RrDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RrDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RrDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
