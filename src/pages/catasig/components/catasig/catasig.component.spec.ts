import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatasigComponent } from './catasig.component';

describe('CatasigComponent', () => {
  let component: CatasigComponent;
  let fixture: ComponentFixture<CatasigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatasigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatasigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
