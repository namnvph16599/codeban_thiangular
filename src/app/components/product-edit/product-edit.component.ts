import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: any = {}
  succes: boolean = false
  failed: boolean = false

  constructor(private productService: ProductsService, private router: ActivatedRoute, private navigateByUrl: Router) { }

  ngOnInit(): void {
    const id = this.router.snapshot.params['id'];
    if (id) {
      this.productService.get(id).subscribe(res => {
        this.product = res
      })
    }
  }

  hanleAdd() {
    this.productService.update(this.product).subscribe(data => {
      this.succes = true;
      setTimeout(() => {
        this.navigateByUrl.navigateByUrl('/products')
      }, 2000)
    })
  }

  toggle() {
    this.succes = !this.succes
    this.failed = !this.failed
  }

}
