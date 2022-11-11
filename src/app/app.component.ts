import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Pedido', url: '/folder/Pedido', icon: 'qr-code' },
    { title: 'Pagamento', url: '/folder/Pagamento', icon: 'checkmark-done' },
    { title: 'Saldo', url: '/folder/Saldo', icon: 'wallet' },
    { title: 'Histórico', url: '/folder/Histórico', icon: 'receipt' },
    { title: 'Transferência', url: '/folder/Transferência', icon: 'swap-horizontal' },
    { title: 'Recarga', url: '/folder/Recarga', icon: 'magnet' },
  ];
  public labels = ['Ajuda', 'Versão'];
  constructor() {}
}
