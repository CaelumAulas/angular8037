import { Component, Input } from "@angular/core";


@Component({
  selector: 'cmail-header',
  templateUrl: './cmail-header.component.html',
  styleUrls: [
    './header-search.css',
    './header.component.css',
  ]
})
export class CmailHeaderComponent {
  tituloDaPagina = 'Título teste';
  private _ativaMenu = false;

  toggleMenu() {
    // this.tituloDaPagina = 'Novo valor';
    this._ativaMenu = !this._ativaMenu;
  }

  get isMenuOpen() {
    return this._ativaMenu;
  }
}
