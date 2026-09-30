import { Component } from '@angular/core';

@Component({
  selector: 'app-pos',
  imports: [],
  templateUrl: './pos.html',
  styleUrl: './pos.css',
})
export class Pos {
  counter:number = 0;

  increment(): void {
    this.counter++;
  }

  decrement(): void {
    if (this.counter > 0) {
      this.counter--;
    }
  }
}
