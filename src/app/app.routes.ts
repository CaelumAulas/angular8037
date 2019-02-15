import { Routes, RouterModule } from '@angular/router'

import { CadastroComponent } from './modules/cadastro/cadastro.component'
import { InboxComponent } from './modules/inbox/inbox.component'
import { LoginComponent } from './modules/login/login.component'
import { NgModule } from '@angular/core';
import { AuthGuardGeral } from './shared/auth/auth-guard-geral';


// Trabalhar com angular === Progrmação Orientada a Configuração

// SEMPRE que você tem uma lib, deveria ser um módulo
// Tem alguma funcionalidade com vários arquivos, deveria ser um módulo
// Uma página/funcionalidade do seu sistema (/cadastro, /financeiro), deveria ser um módulo
// ...

const rotas: Routes = [
  {
    path: '',
    loadChildren: 'src/app/modules/login/login.module#LoginModule'
  },
  { path: 'login', redirectTo: '' }, // faz um redirect (sempre manter urls consistentes)
  { path: 'cadastro', loadChildren: 'src/app/modules/cadastro/cadastro.module#CadastroModule' },
  {
    path: 'inbox', component: InboxComponent,
    canActivate: [ AuthGuardGeral ]
  },
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

