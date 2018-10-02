
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RrTableComponent } from './rr-table.component';

describe('RrTableComponent', () => {
  let component: RrTableComponent;
  let fixture: ComponentFixture<RrTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RrTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RrTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
