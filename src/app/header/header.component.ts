import { Component } from '@angular/core';
import { LoginComponent } from "../components/login/login.component";
import { ProductsComponent } from "../components/products/products.component";

@Component({
  selector: 'app-header',
  imports: [LoginComponent, ProductsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  openpPage() {
    this.productsShow = !this.productsShow;
  }
  show: boolean = false;
  ifMenuClick = {
    sMenuClick: true,
  };
  productsShow: boolean = false;
  showMenu() {
    this.show = !this.show;
  }


}
