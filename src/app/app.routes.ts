import { Routes, RouterModule } from '@angular/router'

import { CadastroComponent } from './modules/cadastro/cadastro.component'
import { InboxComponent } from './modules/inbox/inbox.component'
import { LoginComponent } from './modules/login/login.component'
import { NgModule } from '@angular/core';
const rotas: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  { path: 'login', redirectTo: '' }, // faz um redirect (sempre manter urls consistentes)
  { path: 'cadastro', loadChildren: 'src/app/modules/cadastro/cadastro.module#CadastroModule' },
  { path: 'inbox', component: InboxComponent },
  { path: '**', redirectTo: '' }, // Ou cria uma página 404
];


// export const RouterModuleConfigurado = RouterModule.forRoot(rotas);
@NgModule({
  imports: [
    RouterModule.forRoot(rotas)
  ],
  exports: [
    RouterModule
  ]
})
export class ModuloRoteamento {}

