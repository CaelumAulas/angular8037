import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EmailService } from './services/email.service';


@Component({
  selector: 'inbox-component',
  templateUrl: './inbox.component.html',
})
export class InboxComponent implements OnInit {
  constructor(private emailService: EmailService, ) {
    console.log('componente carregou');
  }

  // Ctrl + D ou F2 ajuda na refatoração de códegos
  private _isNewEmailFormOpen = false;

  emails = [];

  email = {
    conteudo: 'asuhasdu',
    destinatario: 'omariosouto@cmail.com.br',
    assunto: 'Teste 2',
  };


  ngOnInit() { // Componente terminou de montar
    this.emailService.pegaTodos()
      .subscribe((dadosDoServer: Array<any>) => {
        console.log('Emails chegaram!', );
        this.emails = dadosDoServer;
      });
    console.log('componente carregou oficial,');
  }

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
