import { Component } from '@angular/core';

@Component({
  selector: 'app-homework',
  imports: [],
  templateUrl: './homework.html',
  styleUrl: './homework.css',
})
export class Homework {
  studentList = [
    {id: 1, name: "Nara", age: 24},
    {id: 2, name: "Dara", age: 46},
    {id: 3, name: "Fong", age: 64},
    {id: 4, name: "Riza", age: 15},
    {id: 5, name: "Kim", age: 3},
  ]
}
