import { Injectable } from '@angular/core';
import { Tweet } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  tweets = {};

  constructor() { }

  find() {

  }

  create(tweet: Partial<Tweet>) {

  }
}
