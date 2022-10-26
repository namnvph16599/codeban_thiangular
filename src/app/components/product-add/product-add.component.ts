import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product: any = {
    name: '',
    price: 0,
    image: '',
    description: ''
  };
  succes = false;
  failed = false;


  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit(): void {
  }

  hanleAdd() {
    this.productService.add(this.product).subscribe(data => {
      this.succes = true;
      setTimeout(() => {
        this.router.navigateByUrl('/products')
      }, 2000)
    })
  }
  toggle() {
    this.succes = false;
    this.failed = false;
  }
}
