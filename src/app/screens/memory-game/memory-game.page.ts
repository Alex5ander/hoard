import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memory-game',
  templateUrl: './memory-game.page.html',
  styleUrls: ['./memory-game.page.scss'],
})
export class MemoryGamePage implements OnInit {

  cards = [
    {
      type: 'word',
      description: 'Text',
      status:'close',
      id: 0,
    },
    {
      type: 'answer',
      description: 'Text',
      status:'close',
      id: 0,
    },
    {
      type: 'word',
      description: 'Text',
      status:'close',
      id: 1,
    },
    {
      type: 'answer',
      description: 'Text',
      status:'close',
      id: 1,
    },
    {
      type: 'word',
      description: 'Text',
      status:'close',
      id: 2,
    },
    {
      type: 'answer',
      description: 'Text',
      status:'close',
      id: 2,
    },
    {
      type: 'word',
      description: 'Text',
      status:'close',
      id: 3,
    },
    {
      type: 'answer',
      description: 'Text',
      status:'close',
      id: 3,
    }
  ];

  constructor() { }

  ngOnInit() {
    this.cards = this.cards.sort(() => Math.floor(Math.random() * 100) > 50 ? 1 : -1);
  }

  onCardPress(card) {
    console.log(card);
    const opens = this.cards.filter(e => e.status === 'open');
    const amountOpen = opens.length;
    if(amountOpen === 0) {
      card.status = 'open';
    }

    if(amountOpen === 1) {
      card.status = 'open';

      setTimeout(() => {

        const answer = confirm('As cartas a seguir formam par?');

      const first = opens[0];
      const second = card;

      const even = first.id === second.id;

      if(even === answer) {
        first.status ='answered';
        second.status ='answered';
      }else {
        first.status = 'close';
        second.status = 'close';
      }

      }, 1000);
    }
  }

}
