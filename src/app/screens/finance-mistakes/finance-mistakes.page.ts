import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance-mistakes',
  templateUrl: './finance-mistakes.page.html',
  styleUrls: ['./finance-mistakes.page.scss'],
})
export class FinanceMistakesPage implements OnInit {

  contents = [
    {
      title: '',
      text: '',
      imageUrl: '',
    }
  ];

  index = 0;

  constructor() { }

  ngOnInit() {
  }

}
