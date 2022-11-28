import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `<mat-toolbar color="primary">
      <button mat-icon-button><mat-icon>menu</mat-icon></button>
      <a routerLink="/home"><h1>Lemon Mart</h1></a>
      <span class="flex-spacer"></span>
      <button
        mat-mini-fab
        routerLink="/user/profile"
        matTooltip="Profile"
        aria-label="User Profile"
      >
        <mat-icon>account_circle </mat-icon>
      </button>
      <button
        mat-mini-fab
        routerLink="/user/logout"
        matTooltip="Logout"
        aria-label="Logout"
      >
        <mat-icon> lock_open</mat-icon>
      </button>
    </mat-toolbar>

    <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lemon-mart'
}
