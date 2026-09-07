import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() name:String = ''
  @Input() collegeYear:number = 1;
  @Input() isStudent:boolean = false
  @Input() image:string = ''
}
