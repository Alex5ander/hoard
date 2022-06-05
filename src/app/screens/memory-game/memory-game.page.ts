import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalConfirmComponent } from 'src/app/screens/memory-game/modal-confirm/modal-confirm.component';
import { ModalResultComponent } from './modal-result/modal-result.component';

@Component({
  selector: 'app-memory-game',
  templateUrl: './memory-game.page.html',
  styleUrls: ['./memory-game.page.scss'],
})
export class MemoryGamePage implements OnInit {

  counter = 0;

  words = [
    {
      text: 'Amealhar',
      status:'open',
      id: 0,
    },
    {
      text: 'Financeiro',
      status:'open',
      id: 1,
    },
    {
      text: 'Reserva de oportunidades',
      status:'open',
      id: 2,
    },
    {
      text: 'Ativos',
      status:'open',
      id: 3,
    }
  ];

  answers = [
    {
      text: 'Guardar, juntar ou poupar dinheiro',
      status:'open',
      id: 0,
    },
    {
      text: 'Especialista em finanças',
      status:'open',
      id: 1,
    },
    {
      text: 'Valor reservado para aproveitar momentos oportunos',
      status:'open',
      id: 2,
    },
    {
      text: 'Aquilo que pode ser convertido em dinheiro',
      status:'open',
      id: 3,
    }
  ];

  cards = [];
  word = null;
  answer = null;
  targets = 0;
  errors = 0;

  constructor(private modal: ModalController) {}

  ngOnInit() {
    this.shuffle();
  }

  startCounter() {
    let t;
    const count = () => {

      t = setTimeout(count, 1000);
      this.counter += 1;
      if(this.counter === 6) {
        clearTimeout(t);
      }
    };

    count();
  }

  shuffle() {
    const wordsSort = this.words.sort(() => Math.floor(Math.random() * 100) > 50 ? 1 : -1);
    const answersSort = this.answers.sort(() => Math.floor(Math.random() * 100) > 50 ? 1 : -1);

    for(let i = 0; i < this.words.length; i++) {
      this.cards[i] = [ wordsSort[i], answersSort[i] ];
    }

    this.startCounter();

    setTimeout(() => {
      this.cards = this.cards.map(card => {
        card[0].status = 'close';
        card[1].status = 'close';
        return card;
      });
    } , 5000);
  }

  onWordPress(card) {
    if(!this.word && card.status === 'close') {
      card.status = 'open';
      this.word = card;
    }

    this.checkSelectedCards();
  }

  onAnswerPress(card) {
    if(!this.answer && card.status === 'close') {
      card.status = 'open';
      this.answer = card;
    }

    this.checkSelectedCards();
  }

  correct() {
    this.word.status = 'correct';
    this.answer.status = 'correct';
    this.targets += 1;

    this.answer = null;
    this.word = null;
  }

  wrong() {
    this.word.status = 'close error';
    this.answer.status = 'close error';
    this.errors += 1;

    setTimeout(() => {
      this.word.status = 'close';
      this.answer.status = 'close';

      this.answer = null;
      this.word = null;
    }, 300);
  }

  async checkSelectedCards() {
    if(this.answer && this.word) {
      const modalConfirm = await this.modal.create({
        component: ModalConfirmComponent,
        componentProps: {
          word: this.word,
          answer: this.answer,
        }
      });
      await modalConfirm.present();
      const pair = this.word.id === this.answer.id;
      const data = await (await modalConfirm.onDidDismiss()).data;
      if(data) {
       if(data.is && pair) {
         this.correct();
       }else if(data.is !== pair) {
         this.wrong();
       }else {
        this.wrong();
       }
      }else {
        this.word.status = 'close';
        this.answer.status = 'close';
      }

      const endgame = this.cards.every(card => card[0].status === 'correct' && card[1].status === 'correct');
      if(endgame) {
        const modalResult = await this.modal.create({
          component: ModalResultComponent,
          componentProps: {
            targets: this.targets,
            errors: this.errors
          }
        });
        modalResult.present();
      }
    }
  }
}
