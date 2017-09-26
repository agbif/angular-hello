import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trex-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  images: string[] = [
    'https://media.giphy.com/media/Moo8SpSUk6R4A/giphy.gif',
    'https://media.giphy.com/media/fnmsu2lTw3r1e/giphy.gif',
    'https://media.giphy.com/media/K9yiqNFHgBOgw/giphy.gif',
    'https://media.giphy.com/media/7Zv3RYnjJCOly/giphy.gif',
    'https://media.giphy.com/media/11DBdkSqa9mHhm/giphy.gif',
    'https://media.giphy.com/media/B4O7rbpSYVt2o/giphy.gif',
    'https://media.giphy.com/media/CQueKEVYqFBhS/giphy.gif'
  ];
  index: number = 0;
  currentImage: string = this.images[this.index];

  clickCount: number = 0;

  constructor() { }

  ngOnInit() {
  }

  nextImage(myEvent) {
      this.clickCount += 1;
      this.index += 1;

      if (this.index === this.images.length) {
        this.index = 0;
      }

      // "currentImage" is bound to the HTML so if it changes, the HTML changes too.
      this.currentImage = this.images[this.index];
  }

  resetClickCount(myEvent) {
      this.clickCount = 0;
  }

}
