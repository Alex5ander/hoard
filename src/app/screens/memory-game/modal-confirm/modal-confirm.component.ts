import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

interface Card { text: string; id: number; type: string }

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss'],
})
export class ModalConfirmComponent implements OnInit {

  @Input() word: Card;
  @Input() answer: Card;

  constructor(private modal: ModalController) { }

  ngOnInit() {

  }

  is(bool: boolean) {
    this.modal.dismiss({ is: bool });
  }

}
