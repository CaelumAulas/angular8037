import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'cmail-form-group',
  templateUrl: './cmail-form-group.component.html',
  styleUrls: ['./cmail-form-group.component.css']
})
export class CmailFormGroupComponent implements OnInit {
  elemento: ElementRef;
  valorDaLabel: string;

  constructor(elemento: ElementRef) {
    console.log('constructor');
    this.elemento = elemento;
  }

  ngOnInit() { // roda depois que o elemento foi criado na tela
    const elementoInput = this.elemento.nativeElement.querySelector('input');

    this.valorDaLabel = elementoInput.getAttribute('placeholder');
    elementoInput.setAttribute('placeholder', ' ');
  }

}
