import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CmailHeaderComponent } from './components/header/cmail-header.component';

@NgModule({
  declarations: [ // Declara os componentes
    AppComponent,
    CmailHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Define qual começa
})
export class AppModule { }
