import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-result',
  templateUrl: './modal-result.component.html',
  styleUrls: ['./modal-result.component.scss'],
})
export class ModalResultComponent implements OnInit {

  @Input() targets = 0;
  @Input() errors = 0;
  constructor(private route: Router, private modal: ModalController) { }

  ngOnInit() {}

  goHome() {
    this.modal.dismiss();
    this.route.navigateByUrl('/tabs/home');
  }
}
