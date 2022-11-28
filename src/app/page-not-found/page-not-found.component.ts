import { Component } from '@angular/core'

@Component({
  selector: 'app-page-not-found',
  template: `<p>
    This page does not exist go back to
    <a routerLink="/home"> Home </a>
  </p> `,
  styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent {}
