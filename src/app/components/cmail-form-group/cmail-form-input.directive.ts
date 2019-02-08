import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[cmailInput]'
})
export class CmailFormInputDirective {
  constructor(elementoAtual: ElementRef) {
    // Injeção de dependencia (não sei criar, angular me da pfv)
    console.log('Diretiva sendo chamada!', );
    const elemento = elementoAtual.nativeElement;

    elemento.id = elemento.getAttribute('placeholder').replace(/\s/g, '');
    elemento.classList.add('mdl-textfield__input')
  }
}
