import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any = []
  constructor(private productService: ProductsService) { }
  succes: any = false;

  ngOnInit(): void {
    this.productService.getAll().subscribe(res => this.products = res)
  }

  handleRemove(id: number) {
    if (confirm('Are you sure remove product this')) {
      console.log(id);
      this.productService.remove(id).subscribe(res => this.products = this.products.filter((p: any) => p.id !== id))
      this.succes = true
    }
  }
  toggle() {
    this.succes = !this.succes
  }
}
