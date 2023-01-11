import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './shared/pipes/search.pipe';
import { ColorPipe } from './shared/pipes/color.pipe';
import { GenderPipe } from './shared/pipes/gender.pipe';
import { PricePipe } from './shared/pipes/price.pipe';
import { TypePipe } from './shared/pipes/type.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ShoppingCartComponent,
    SearchPipe,
    ColorPipe,
    GenderPipe,
    PricePipe,
    TypePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
