import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PHMCComponent } from './phmc.component';

describe('PHMCComponent', () => {
  let component: PHMCComponent;
  let fixture: ComponentFixture<PHMCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PHMCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PHMCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
