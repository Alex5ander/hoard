import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalConfirmComponent } from 'src/app/screens/memory-game/modal-confirm/modal-confirm.component';

@Component({
  selector: 'app-memory-game',
  templateUrl: './memory-game.page.html',
  styleUrls: ['./memory-game.page.scss'],
})
export class MemoryGamePage implements OnInit {

  words = [
    {
      text: 'Amealhar',
      status:'close',
      id: 0,
    },
    {
      text: 'Financeiro',
      status:'close',
      id: 1,
    },
    {
      text: 'Reserva de oportunidades',
      status:'close',
      id: 2,
    },
    {
      text: 'Ativos',
      status:'close',
      id: 3,
    }
  ];

  answers = [
    {
      text: 'Guardar, juntar ou poupar dinheiro',
      status:'close',
      id: 0,
    },
    {
      text: 'Especialista em finanças',
      status:'close',
      id: 1,
    },
    {
      text: 'Valor reservado para aproveitar momentos oportunos',
      status:'close',
      id: 2,
    },
    {
      text: 'Aquilo que pode ser convertido em dinheiro',
      status:'close',
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
    this.words = this.words.sort(() => Math.floor(Math.random() * 100) > 50 ? 1 : -1);
    this.answers = this.answers.sort(() => Math.floor(Math.random() * 100) > 50 ? 1 : -1);

    for(let i = 0; i < this.words.length; i++) {
      this.cards[i] = [ this.words[i], this.answers[i] ];
    }
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

  async checkSelectedCards() {
    if(this.answer && this.word) {
      const modal = await this.modal.create({
        component: ModalConfirmComponent,
        componentProps: {
          word: this.word,
          answer: this.answer,
        }
      });
      setTimeout(() => modal.present(), 500);
      const data = await (await modal.onDidDismiss()).data;
      if(data.correct) {
        this.word.status = 'open correct';
        this.answer.status = 'open correct';
        this.targets += 1;
      }else {
        this.word.status = 'close';
        this.answer.status = 'close';
        this.errors += 1;
      }
      this.answer = null;
      this.word = null;

      const endgame = this.cards.every(card => card.status === 'open correct');
      if(endgame) {}
    }
  }
}
