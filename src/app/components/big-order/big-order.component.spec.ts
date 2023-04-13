import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigOrderComponent } from './big-order.component';

describe('BigOrderComponent', () => {
  let component: BigOrderComponent;
  let fixture: ComponentFixture<BigOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
