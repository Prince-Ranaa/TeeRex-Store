import { Component } from '@angular/core';
import { AddToCartService } from 'src/app/shared/add-to-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public cart: AddToCartService) { }
}
