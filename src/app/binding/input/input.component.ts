import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stegosaurus-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  // the "value" attribute no longer works with "ngModel"
  // instead, give the variable an initial value.
  theName: string = 'Dr. Dre';
  // connected to the input with "ngModel"

  messageText: string = "";

  theProduct: any = {};

  foodSelection: string;
  foodReaction: string;

  constructor() { }

  ngOnInit() {
  }

  isClean() {
      let weGood = true;

      if (this.messageText.includes('fuck')        ||
          this.messageText.includes('bitch')       ||
          this.messageText.includes('ass')         ||
          this.messageText.includes('New Zealand') ||
          this.messageText.includes('shit')
         ) {
          weGood = false;
      }

      return weGood;
  } // isClean()


  changeReaction() {
      if (!this.foodSelection) {
        return;
      }

      if (this.foodSelection === 'pizza') {
          this.foodReaction = 'Perfect choice.';
      }
      else if (this.foodSelection === 'burgers' ||
               this.foodSelection === 'anchovies') {
          this.foodReaction = 'Good choice';
      }
      else {
          this.foodReaction = 'Horrible.';
      }
  } // changeReaction()
} // InputComponent
