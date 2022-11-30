import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredialTaxComponent } from './predial-tax.component';

describe('PredialTaxComponent', () => {
  let component: PredialTaxComponent;
  let fixture: ComponentFixture<PredialTaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredialTaxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredialTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
