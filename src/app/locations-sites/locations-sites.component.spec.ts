import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsSitesComponent } from './locations-sites.component';

describe('LocationsSitesComponent', () => {
  let component: LocationsSitesComponent;
  let fixture: ComponentFixture<LocationsSitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationsSitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationsSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
