import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson4',
  imports: [],
  templateUrl: './lesson4.html',
  styleUrl: './lesson4.css',
})
export class Lesson4 {
  item = [
    {id: 1, name: 'សៀវភៅ'},
    {id: 2, name: 'ប៊ិច'},
    {id: 3, name: 'ខ្មៅដៃ'},
  ]

  status = 'off'
}

