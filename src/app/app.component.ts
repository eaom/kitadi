import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Pedido', url: '/folder/Pedido', icon: 'qr-code' },
    { title: 'Pagamento', url: '/folder/Pagamento', icon: 'receipt' },
    { title: 'Saldo', url: '/folder/Saldo', icon: 'wallet' },
    { title: 'Movimento', url: '/folder/Movimento', icon: 'list' },
    { title: 'Transferências', url: '/folder/Transferências', icon: 'swap-horizontal' },
    { title: 'Carregamentos', url: '/folder/Carregamentos', icon: 'magnet' },
  ];
  public labels = ['Ajuda', 'versão'];
  constructor() {}
}
