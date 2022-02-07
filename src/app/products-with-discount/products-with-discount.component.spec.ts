import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsWithDiscountComponent } from './products-with-discount.component';

describe('ProductsWithDiscountComponent', () => {
  let component: ProductsWithDiscountComponent;
  let fixture: ComponentFixture<ProductsWithDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsWithDiscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsWithDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
