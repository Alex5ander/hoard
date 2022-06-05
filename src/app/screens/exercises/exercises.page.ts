import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.page.html',
  styleUrls: ['./exercises.page.scss'],
})
export class ExercisesPage implements OnInit {

  exercices = [
    {
      title: 'Teste o que você aprendeu sobre organização financeira',
      routerLink: '#'
    },
    {
      title: 'Teste o que você aprendeu sobre tipos de reservas financeira',
      routerLink: '#'
    },
    {
      title: 'Teste o que você aprendeu sobre regra 50 30 20',
      routerLink: '#'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
