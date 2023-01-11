import { Component, ElementRef, ViewChild } from '@angular/core';
import { AddToCartService } from 'src/app/shared/add-to-cart.service';
import { HttpServiceService } from 'src/app/shared/http-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  searchedItem = ''
  search = ''

  color: any[] = [];
  gender: any[] = []
  type: any[] = []
  price: any[] = []

  products: any = []


  @ViewChild("filter") filter: ElementRef

  constructor(private http: HttpServiceService, private cart: AddToCartService) {
    this.getProducts()
  }


  filterButton() {

    if (this.filter.nativeElement.style.width == 0 || this.filter.nativeElement.style.width == "0px") {
      console.log(this.filter.nativeElement.style.width);
      this.filter.nativeElement.style.width = "200px"

    }
    else {
      console.log(this.filter.nativeElement.style.width);
      this.filter.nativeElement.style.width = "0px"

    }


  }


  addToCart(product: any) {
    this.cart.addToCart(product)
    console.log(this.cart.cartItem);
  }


  searchItem() {
    this.search = this.searchedItem
  }

  getProducts() {
    this.http.getProducts().subscribe({
      next: (res) => {
        this.products = res
        console.log(this.products);

      }
    })
  }

  colorFilter(e: any) {
    if (e.target.checked) {
      this.color.push(e.target.value)
    }
    else {
      for (let i = 0; i < this.color.length; i++) {
        if (this.color[i] == e.target.value) {
          this.color.splice(i, 1)
        }
      }
    }

    this.getProducts()
  }

  genderFilter(e: any) {
    if (e.target.checked) {
      this.gender.push(e.target.value)
    }
    else {
      for (let i = 0; i < this.gender.length; i++) {
        if (this.gender[i] == e.target.value) {
          this.gender.splice(i, 1)
        }
      }
    }
    this.getProducts()
  }


  priceFilter(e: any) {
    if (e.target.checked) {
      this.price.push(e.target.value)
    }
    else {
      for (let i = 0; i < this.price.length; i++) {
        if (this.price[i] == e.target.value) {
          this.price.splice(i, 1)
        }
      }
    }
    this.getProducts();
  }


  typeFilter(e: any) {
    if (e.target.checked) {
      this.type.push(e.target.value)
    }
    else {
      for (let i = 0; i < this.type.length; i++) {
        if (this.type[i] == e.target.value) {
          this.type.splice(i, 1)
        }
      }
    }
    this.getProducts();
  }

}


