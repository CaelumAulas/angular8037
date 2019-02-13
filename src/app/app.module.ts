import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CmailHeaderComponent } from './components/header/cmail-header.component';

import { InboxComponent } from './modules/inbox/inbox.component';
import { LoginComponent } from './modules/login/login.component';
import { ModuloRoteamento } from './app.routes';
// Importando o CadastroModule
// import { CadastroModule } from './modules/cadastro/cadastro.module';
// Instalar o angular schematics
// Criar os componentes:
  // - inbox
  // - login
  // - cadastro

@NgModule({
  declarations: [ // Declara os componentes/diretivas
    AppComponent,
    CmailHeaderComponent,
    InboxComponent,
    LoginComponent,
  ],
  imports: [ // Modulos vem nos imports
    BrowserModule,
    FormsModule,
    ModuloRoteamento,
    // CadastroModule,
  ],
  providers: [],
  bootstrap: [AppComponent] // Define qual começa
})
export class AppModule { }
