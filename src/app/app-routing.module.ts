import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'tweets',
    loadChildren: () => import('./modules/tweet/tweet.module').then(m => m.TweetModule)
  },
  {
    path: '',
    redirectTo: '/tweets',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
