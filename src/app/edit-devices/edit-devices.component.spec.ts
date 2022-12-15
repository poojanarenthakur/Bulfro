import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDevicesComponent } from './edit-devices.component';

describe('EditDevicesComponent', () => {
  let component: EditDevicesComponent;
  let fixture: ComponentFixture<EditDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDevicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
