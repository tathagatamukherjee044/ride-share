import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerItemComponent } from './buyer-item.component';

describe('BuyerItemComponent', () => {
  let component: BuyerItemComponent;
  let fixture: ComponentFixture<BuyerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
