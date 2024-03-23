import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-product-datail',
  templateUrl: './product-datail.component.html',
  styleUrls: ['./product-datail.component.css']
})
export class ProductDatailComponent {
  id: any = 0;
  allProducts: any[] = [];
  selectedProduct: any = {};

  constructor(private dataService: DataService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.allProducts = this.dataService.getProductData();
    this.selectedProduct = this.dataService.getProductDetail(+this.id);
  }
}
