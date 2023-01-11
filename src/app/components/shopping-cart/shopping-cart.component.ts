import { Component } from '@angular/core';
import { AddToCartService } from 'src/app/shared/add-to-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {

  products = false

  constructor(public cart: AddToCartService) {
    for (let i = 0; i < this.cart.cartItem.length; i++) {
      this.cart.cartItem[i].quantityAdded = 1
    }
  }

  deleteItem(index) {
    this.cart.cartItem.splice(index, 1)
  }

  increaseQuantity(item: any) {
    item.quantityAdded += 1
    if (item.quantityAdded > item.quantity) {
      item.quantityAdded = item.quantity
      alert(`only ${(item.quantity)} items left cannot buy more`)
    }
  }

  decreaseQuantity(item: any) {
    item.quantityAdded -= 1
    if (item.quantityAdded <= 1) {
      item.quantityAdded = 1;
    }
  }


  totalAmount() {
    let totalAmount = 0;
    this.cart.cartItem.map((item: any) => {
      totalAmount += item.price * item.quantityAdded
    })
    return totalAmount
  }

}
