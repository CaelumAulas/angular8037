import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CmailHeaderComponent } from './components/header/cmail-header.component';

import { InboxComponent } from './modules/inbox/inbox.component';
import { LoginComponent } from './modules/login/login.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { RouterModuleConfigurado } from './app.routes';
import { CmailFormGroupComponent } from './components/cmail-form-group/cmail-form-group.component';
import { CmailFormInputDirective } from './components/cmail-form-group/cmail-form-input.directive';

// Instalar o angular schematics
// Criar os componentes:
  // - inbox
  // - login
  // - cadastro

@NgModule({
  declarations: [ // Declara os componentes
    AppComponent,
    CmailHeaderComponent,
    InboxComponent,
    LoginComponent,
    CadastroComponent,
    CmailFormGroupComponent,
    CmailFormInputDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModuleConfigurado
  ],
  providers: [],
  bootstrap: [AppComponent] // Define qual começa
})
export class AppModule { }
