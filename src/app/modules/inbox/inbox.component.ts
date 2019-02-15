import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EmailService } from './services/email.service';


@Component({
  selector: 'inbox-component',
  templateUrl: './inbox.component.html',
})
export class InboxComponent {
  constructor(private emailService: EmailService, ) {}



  // Ctrl + D ou F2 ajuda na refatoração de códegos
  private _isNewEmailFormOpen = false;

  emails = [
    {assunto: 'Sei la', destinatario: 'mario@cmail.com.br', conteudo: 'alo alo w brazil'},
    {assunto: 'Sei la 2', destinatario: 'amanda@cmail.com.br', conteudo: 'alo alo w brazil'}
  ];

  email = {
    conteudo: 'asuhasdu',
    destinatario: 'omariosouto@cmail.com.br',
    assunto: 'Teste 2',
  };

  handleCriarEmail(infosDoEvento: Event, formNovoEmail: NgForm) {
   infosDoEvento.preventDefault();
   if (formNovoEmail.invalid) { return; }
   const emailDTO = {
    to: this.email.destinatario,
    subject: this.email.assunto,
    content: this.email.conteudo
   };

   this.emailService.criarEmail(emailDTO)
    .subscribe((dadosDoServer) => {
      this.emails.push(this.email);
      formNovoEmail.resetForm(this.email = { conteudo: '', destinatario: '', assunto: '', });
    });
  }

  toggleNewEmailForm() {
    this._isNewEmailFormOpen = !this._isNewEmailFormOpen;
  }

  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen;
  }
}
