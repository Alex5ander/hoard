import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-result',
  templateUrl: './modal-result.component.html',
  styleUrls: ['./modal-result.component.scss'],
})
export class ModalResultComponent implements OnInit {

  @Input() targets = 0;
  @Input() errors = 0;
  
  constructor() { }

  ngOnInit() {}

}
