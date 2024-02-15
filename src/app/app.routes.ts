import { Routes } from '@angular/router';
import { CardapioComponent } from './pages/cardapio/cardapio.component'
import { AccountComponent } from './pages/client/account/account.component';
import { SingupComponent } from './pages/client/account/singup/singup.component';
import { LoginComponent } from './pages/client/account/login/login.component';
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
        component: SingupComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      }
    ]
  }
];
