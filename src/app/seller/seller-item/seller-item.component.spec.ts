import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerItemComponent } from './seller-item.component';

describe('SellerItemComponent', () => {
  let component: SellerItemComponent;
  let fixture: ComponentFixture<SellerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
