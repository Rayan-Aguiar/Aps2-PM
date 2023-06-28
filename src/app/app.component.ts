import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  public appPages = [
    { title: 'API', url: '/folder/inbox', icon: 'mail' },
    { title: 'Sobre mim', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Sair', url: '/folder/outbox', icon: 'paper-plane' },
  ];

  constructor() {


  }
}
