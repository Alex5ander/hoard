import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.page.html',
  styleUrls: ['./presentation.page.scss'],
})
export class PresentationPage implements OnInit {

  index = 0;
  constructor() { }

  ngOnInit() {
  }

  scroll(event) {
    const el = event.target;
    this.index = Math.floor(el.scrollLeft / window.innerWidth);
  }

}
