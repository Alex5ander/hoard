import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuItems = [
    {icon: 'settings', text:'Configurações' },
    {icon: 'shield', text:'Políticas de privacidade' },
    {icon: 'information-circle', text:'Sobre' },
  ];
  constructor() { }

  ngOnInit() {}

}
