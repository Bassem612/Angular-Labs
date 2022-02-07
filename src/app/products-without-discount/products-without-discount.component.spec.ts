import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsWithoutDiscountComponent } from './products-without-discount.component';

describe('ProductsWithoutDiscountComponent', () => {
  let component: ProductsWithoutDiscountComponent;
  let fixture: ComponentFixture<ProductsWithoutDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsWithoutDiscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsWithoutDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
