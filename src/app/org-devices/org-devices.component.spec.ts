import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgDevicesComponent } from './org-devices.component';

describe('OrgDevicesComponent', () => {
  let component: OrgDevicesComponent;
  let fixture: ComponentFixture<OrgDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgDevicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
