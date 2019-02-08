import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'inbox-component',
  templateUrl: './inbox.component.html',
})
export class InboxComponent {
  // Ctrl + D ou F2 ajuda na refatoração de códegos
  private _isNewEmailFormOpen = false;

  emails = [
    {assunto: 'Sei la', destinatario: 'mario@cmail.com.br', conteudo: 'alo alo w brazil'},
    {assunto: 'Sei la 2', destinatario: 'amanda@cmail.com.br', conteudo: 'alo alo w brazil'}
  ];

  email = {
    conteudo: '',
    destinatario: '',
    assunto: '',
  };

  handleCriarEmail(infosDoEvento: Event, formNovoEmail: NgForm) {
   infosDoEvento.preventDefault();
   if (formNovoEmail.invalid) {
     return;
   }
   this.emails.push(this.email);
   formNovoEmail.resetForm(this.email = { conteudo: '', destinatario: '', assunto: '', });
  }

  toggleNewEmailForm() {
    console.log('alooo');
    this._isNewEmailFormOpen = !this._isNewEmailFormOpen;
  }

  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen;
  }
}
