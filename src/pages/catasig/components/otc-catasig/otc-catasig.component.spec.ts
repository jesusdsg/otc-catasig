import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtcCatasigComponent } from './otc-catasig.component';

describe('OtcCatasigComponent', () => {
  let component: OtcCatasigComponent;
  let fixture: ComponentFixture<OtcCatasigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtcCatasigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtcCatasigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
