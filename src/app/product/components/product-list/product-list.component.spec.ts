import { Product } from './../../models/product';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
 
import { ProductListComponent } from './product-list.component';


import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

fdescribe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListComponent ],
      imports: [
        HttpClientModule,
        RouterModule.forRoot([])
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    let p: Product = new Product();
    p.id = 1;
    p.price = 100;
    p.name = 'p1';
    
    expect(component.cartService.amount).toBe(0);
    component.addToCart(p);
    expect(component.cartService.amount).toBe(100);

 

  });
});
