import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { MangerHomeComponent } from './manager/manger-home/manger-home.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, //making a route the home page
  { path: 'home', component: HomeComponent },

  {
    path: 'manager',
    loadChildren: () => import('./manager/manager.module').then((m) => m.ManagerModule), // implementing lazy loading for manager module
  },

  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  }, //lazy loading for user module

  { path: '**', component: PageNotFoundComponent }, //make a wild card route to enable any wrong route end up here by using **
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
