import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  allData: any = [];

  searchText: string = '';

  order: string = 'asc'

  constructor(private dataService: DataService) {
    this.allData = this.dataService.products;
    // console.log(this.allData);
  }

  sortPrice() {
    if (this.order == 'asc') {
      this.allData.sort((a: any, b: any) => a.price - b.price);
      this.order = 'desc';
    } else {
      this.allData.sort((a: any, b: any) => b.price - a.price);
      this.order = 'asc';
    }
    // console.log('clicked');
  }

  handleInput(event: any) {

    if (this.searchText) {
      let filtered = this.allData.filter((item: any) => (
        item.productName.toLowerCase().includes(this.searchText.toLowerCase())
      ));

      // console.log(filtered);
      this.allData = filtered;
    } else {
      this.allData = this.dataService.products;
    }
  }
}
