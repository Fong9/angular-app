import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hello } from "./hello/hello";
import { Setec } from "./setec/setec";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hello, Setec],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = signal('angular-app');

  isLoggedIn = true 

  web = 60
  mis = 70
  data = 95

  avg = (this.web + this.mis + this.data) / 3
}
