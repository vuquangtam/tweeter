import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TweetPageComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: TweetPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TweetRoutingModule { }
