import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { components } from './components';
import { containers } from './containers';

import { TweetRoutingModule } from './tweet-routing.module';

@NgModule({
  declarations: [
    ...components,
    ...containers
  ],
  imports: [
    CommonModule,
    TweetRoutingModule
  ]
})
export class TweetModule { }
