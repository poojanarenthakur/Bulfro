import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DWLRREPORTSComponent } from './dwlr-reports.component';

describe('DWLRREPORTSComponent', () => {
  let component: DWLRREPORTSComponent;
  let fixture: ComponentFixture<DWLRREPORTSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DWLRREPORTSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DWLRREPORTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
