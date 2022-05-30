import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit {

  contents = [
    {
      title: 'Jogo da memória financeira',
      routerLink:'/memory-game',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
