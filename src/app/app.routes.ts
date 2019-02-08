import { Routes, RouterModule } from '@angular/router'

import { CadastroComponent } from './modules/cadastro/cadastro.component'
import { InboxComponent } from './modules/inbox/inbox.component'
import { LoginComponent } from './modules/login/login.component'
const rotas: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  { path: 'login', redirectTo: '' }, // faz um redirect (sempre manter urls consistentes)
  { path: 'cadastro', component: CadastroComponent },
  { path: 'inbox', component: InboxComponent },
  { path: '**', redirectTo: '' }, // Ou cria uma página 404
];
export const RouterModuleConfigurado = RouterModule.forRoot(rotas);

