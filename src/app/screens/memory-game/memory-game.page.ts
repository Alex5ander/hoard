import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memory-game',
  templateUrl: './memory-game.page.html',
  styleUrls: ['./memory-game.page.scss'],
})
export class MemoryGamePage implements OnInit {

  cards = [
    {
      title: '',
      type: 'word'
    },
    {
      title: '',
      type: 'answer'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
