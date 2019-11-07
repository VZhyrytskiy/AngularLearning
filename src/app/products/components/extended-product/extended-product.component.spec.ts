import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedProductComponent } from './extended-product.component';

describe('ExtendedProductComponent', () => {
  let component: ExtendedProductComponent;
  let fixture: ComponentFixture<ExtendedProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendedProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
