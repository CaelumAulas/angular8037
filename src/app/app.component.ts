import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Ctrl + D ou F2 ajuda na refatoração de códegos
  private _isNewEmailFormOpen = false

  emails = [
    {assunto: 'Sei la', destinatario: 'mario@cmail.com.br', conteudo: 'alo alo w brazil'},
    {assunto: 'Sei la 2', destinatario: 'amanda@cmail.com.br', conteudo: 'alo alo w brazil'}
  ];

  toggleNewEmailForm() {
    console.log('alooo');
    this._isNewEmailFormOpen = !this._isNewEmailFormOpen
  }

  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen
  }

}
