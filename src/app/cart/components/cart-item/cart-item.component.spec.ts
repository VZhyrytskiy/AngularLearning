import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CartItemComponent } from '..';
import { Category } from '../../../shared/enums/category';
import { CartItemModel } from '../../models/cartItem.model';
import { ProductModel } from '../../../products/models/product.model';

describe('HeaderComponent', () => {
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;
  let nameEl: DebugElement;
  let removeButton: DebugElement;

  const cartItem = {
    id: 0,
    product: {
      id: 1,
      name: 'Product Name',
      description: 'Product Description',
      price: 20,
      category: Category.Audi,
      isAvailable: true
    } as ProductModel,
    amount: 2
  } as CartItemModel;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartItemComponent]
    });

    fixture = TestBed.createComponent(CartItemComponent);
    component = fixture.componentInstance;
  });

  it('should display product name', () => {
    component.item = cartItem;

    fixture.detectChanges();
    nameEl = fixture.debugElement.query(By.css('h3'));
    expect(nameEl.nativeElement.textContent).toContain(component.item.product.name);
  });

  it('should raise remove event when remove button clicked', () => {

    let itemToRemove = null;
    component.item = cartItem;
    fixture.detectChanges();

    component.remove.subscribe((item) => (itemToRemove = item));

    removeButton = fixture.debugElement.query(By.css('.remove-button button'));
    removeButton.triggerEventHandler('click', null);
    expect(cartItem).toBe(itemToRemove);
  });
});
