import { Injectable } from '@angular/core';
import { Tweet } from '../models';

import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  tweetEntities = {};
  tweets = []

  constructor() { }

  find() {
    return this.tweets.map(id => this.tweetEntities[id]);
  }

  create(message: string) {
    const id = uuid();
    const createdAt = Date.now();

    this.tweetEntities[id] = { id, message, createdAt };

    this.tweets.push(id);
  }
}
