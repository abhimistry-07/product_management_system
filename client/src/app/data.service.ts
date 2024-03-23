import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  products: any = [
    { "id": 1, "productName": "Laptop", "price": 1200, "category": "Electronics" },
    { "id": 2, "productName": "Smartphone", "price": 800, "category": "Electronics" },
    { "id": 3, "productName": "Headphones", "price": 150, "category": "Electronics" },
    { "id": 4, "productName": "Desk", "price": 300, "category": "Furniture" },
    { "id": 5, "productName": "Chair", "price": 100, "category": "Furniture" },
    { "id": 6, "productName": "Tablet", "price": 500, "category": "Electronics" },
    { "id": 7, "productName": "Television", "price": 1500, "category": "Electronics" },
    { "id": 8, "productName": "Sofa", "price": 700, "category": "Furniture" },
    { "id": 9, "productName": "Keyboard", "price": 50, "category": "Electronics" },
    { "id": 10, "productName": "Monitor", "price": 400, "category": "Electronics" },
    { "id": 11, "productName": "Bed", "price": 600, "category": "Furniture" },
    { "id": 12, "productName": "Microwave", "price": 200, "category": "Electronics" },
    { "id": 13, "productName": "Dining Table", "price": 350, "category": "Furniture" },
    { "id": 14, "productName": "Camera", "price": 900, "category": "Electronics" },
    { "id": 15, "productName": "Coffee Table", "price": 120, "category": "Furniture" }
  ]
}
