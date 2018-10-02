
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RrNavbarComponent } from './rr-navbar.component';

describe('RrNavbarComponent', () => {
  let component: RrNavbarComponent;
  let fixture: ComponentFixture<RrNavbarComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [RrNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RrNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
