import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = signal('angular-app');

  name: string = 'Bro';
  age: number = 25;
  salary: number = 300.5;
  addrress: string = 'Phnom Penh';
}
