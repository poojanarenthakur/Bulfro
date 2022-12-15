import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DWLRMESSAGEComponent } from './dwlr-message.component';

describe('DWLRMESSAGEComponent', () => {
  let component: DWLRMESSAGEComponent;
  let fixture: ComponentFixture<DWLRMESSAGEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DWLRMESSAGEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DWLRMESSAGEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
