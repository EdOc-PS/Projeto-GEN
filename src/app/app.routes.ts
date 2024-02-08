import { Routes } from '@angular/router';
import { CardapioComponent } from './pages/cardapio/cardapio.component'
import { AccountComponent } from './pages/client/account/account.component';
export const routes: Routes = [
  {
    path: '',
    component: CardapioComponent
  },
  {
    path: 'account',
    component: AccountComponent,
    children:[
      {
        path: 'singup',
        component: CardapioComponent,
      }
    ]
  }
];
