import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {


  cartItem: any = []
  constructor() { }

  addToCart(product: any) {


    let itemPresent = false
    for (let i = 0; i < this.cartItem.length; i++) {
      if (this.cartItem[i].id == product.id) {
        itemPresent = true;
      }
    }
    if (!itemPresent) {
      this.cartItem.push(product)
    }
  }
}
