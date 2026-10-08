import { Component } from '@angular/core';

@Component({
  selector: 'app-pos',
  imports: [],
  templateUrl: './pos.html',
  styleUrl: './pos.css',
})
export class Pos {
  items: any[] = [
    {
      "img": 'pizza.png',
      "productName": 'Pizza',
      "price": 25.90,
      "dis": 10,
      "qty": 0,
    },
    {
      "img": 'burger.png',
      "productName": 'Burger',
      "price": 5.00,
      "dis": 0,
      "qty": 0,
    },
    {
      "img": 'chicken.png',
      "productName": 'Fries Chicken',
      "price": 12.5,
      "dis": 5,
      "qty": 0,
    },
    {
      "img": 'speg.png',
      "productName": 'Spegatti',
      "price": 8.60,
      "dis": 10,
      "qty": 0,
    },
    {
      "img": 'sandwich.png',
      "productName": 'Sandwich',
      "price": 2.50,
      "dis": 0,
      "qty": 0,
    },
    {
      "img": 'soda.png',
      "productName": 'Soda',
      "price": 2.00,
      "dis": 0,
      "qty": 0,
    },
    {
      "img": 'salad.png',
      "productName": 'Salad',
      "price": 6.50,
      "dis": 5,
      "qty": 0,
    },
    {
      "img": 'pasta.png',
      "productName": 'Pasta',
      "price": 9.00,
      "dis": 10,
      "qty": 0,
    },
    {
      "img": 'ice-cream.png',
      "productName": 'Ice Cream',
      "price": 3.50,
      "dis": 0,
      "qty": 0,
    },
  ]
  
  increment(item: { qty: number }): void {
    item.qty++;
  }

  decrement(item: { qty: number }): void {
    if (item.qty > 0) {
      item.qty--;
    }
  }

  btnCart(item: any): void {
    this.items.push(item)
  }
}
