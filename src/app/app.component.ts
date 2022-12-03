import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
 })
export class AppComponent {
  public appPages = [
    { title: 'Início', url: '/folder/Início', icon: 'home' },
    { title: 'Pedir', url: '/folder/Pedir', icon: 'qr-code' },
    { title: 'Pagar', url: '/folder/Pagar', icon: 'wallet' },
    { title: 'Transferir', url: '/folder/Transferir', icon: 'swap-horizontal' },
    { title: 'Movimentos', url: '/folder/Movimentos', icon: 'list' },
    { title: 'Configurar', url: '/folder/Configurar', icon: 'settings' },
    { title: 'Saír', url: '/folder/Saír', icon: 'exit' },
  ];
  public labels = ['Sobre'];
  constructor() {}
}
