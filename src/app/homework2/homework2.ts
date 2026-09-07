import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-homework2',
  imports: [],
  templateUrl: './homework2.html',
  styleUrl: './homework2.css',
})
export class Homework2 {
  @Input() n:number[] = [];
  num: number[] = [1,2,3,4,5,6,7,8,9,10]
}
