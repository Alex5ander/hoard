import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.page.html',
  styleUrls: ['./exercises.page.scss'],
})
export class ExercisesPage implements OnInit {

  items = [{
    title: 'Padrão de vida',
    description: 'Teste o que você aprendeu sobre finanças pessoais',
    routerLink: '',
  }];
  constructor() { }

  ngOnInit() {
  }

}
