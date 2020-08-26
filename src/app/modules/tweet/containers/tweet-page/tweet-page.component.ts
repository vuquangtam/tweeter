import { Component, OnInit } from '@angular/core';
import { TweetService } from '@app/core/services/tweet.service';
import { splitMessage } from '@app/core/utils';

@Component({
  selector: 'app-tweet-page',
  templateUrl: './tweet-page.component.html',
  styleUrls: ['./tweet-page.component.scss']
})
export class TweetPageComponent implements OnInit {
  chunkSize = 50;
  tweets = [];

  constructor(private tweetService: TweetService) { }

  ngOnInit(): void {
  }

  postTweet(message) {
    if (!message) {
      return;
    }

    message = message.trim();

    let chunks = [];

    if (message.length <= this.chunkSize) {
      chunks = [message];
    } else {
      try {
        chunks = splitMessage(message, this.chunkSize);
      } catch(e) {
        alert(e);
      }
    }

    chunks.forEach(chunk => {
      this.tweetService.create(chunk);
    })

    this.tweets = this.tweetService.find();
  }
}
