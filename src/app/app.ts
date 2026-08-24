import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hello } from "./hello/hello";
import { Setec } from "./setec/setec";
import { Lesson } from "./lesson/lesson";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Lesson],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = signal('angular-app');
}
