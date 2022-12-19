import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DWLRDETAILSComponent } from './dwlr-details.component';

describe('DWLRDETAILSComponent', () => {
  let component: DWLRDETAILSComponent;
  let fixture: ComponentFixture<DWLRDETAILSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DWLRDETAILSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DWLRDETAILSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
