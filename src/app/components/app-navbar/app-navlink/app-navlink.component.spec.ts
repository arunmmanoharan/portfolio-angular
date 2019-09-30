import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNavlinkComponent } from './app-navlink.component';

describe('AppNavlinkComponent', () => {
  let component: AppNavlinkComponent;
  let fixture: ComponentFixture<AppNavlinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNavlinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNavlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
