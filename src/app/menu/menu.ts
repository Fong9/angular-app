import { Component } from '@angular/core';
import { Router, RouterLinkWithHref } from '@angular/router';
import { routes } from '../app.routes';

@Component({
  selector: 'app-menu',
  imports: [RouterLinkWithHref],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {}
