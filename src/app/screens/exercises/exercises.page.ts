import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.page.html',
  styleUrls: ['./exercises.page.scss'],
})
export class ExercisesPage implements OnInit {

  items = [
    {
      title: 'Titulo',
      description: 'Teste o que você aprendeu sobre...',
      routerLink: '',
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
