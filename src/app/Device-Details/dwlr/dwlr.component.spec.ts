import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DWLRComponent } from './dwlr.component';

describe('DWLRComponent', () => {
  let component: DWLRComponent;
  let fixture: ComponentFixture<DWLRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DWLRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DWLRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
