import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeItemsComponent } from './change-items.component';

describe('ChangeItemsComponent', () => {
  let component: ChangeItemsComponent;
  let fixture: ComponentFixture<ChangeItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
