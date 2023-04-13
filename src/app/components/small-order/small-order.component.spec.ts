import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallOrderComponent } from './small-order.component';

describe('SmallOrderComponent', () => {
  let component: SmallOrderComponent;
  let fixture: ComponentFixture<SmallOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
