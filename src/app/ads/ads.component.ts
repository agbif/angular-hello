import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ads-triceratops',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {

  adsList: any = [
      { title: 'Viagra Cheap', link: 'http://example.com' },
      { title: 'Triceratops Exhibit', link: 'http://example.com' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
