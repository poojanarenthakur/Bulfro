import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DWLRALERTSComponent } from './dwlr-alerts.component';

describe('DWLRALERTSComponent', () => {
  let component: DWLRALERTSComponent;
  let fixture: ComponentFixture<DWLRALERTSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DWLRALERTSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DWLRALERTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
