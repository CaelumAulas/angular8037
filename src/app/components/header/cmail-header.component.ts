import { Component, Input } from "@angular/core";
import { HeaderDataService } from './header-data.service';


@Component({
  selector: 'cmail-header',
  templateUrl: './cmail-header.component.html',
  styleUrls: [
    './header-search.css',
    './header.component.css',
  ]
})
export class CmailHeaderComponent {
  @Input() tituloDaPagina;
  private _ativaMenu = false;

  constructor(private headerDataService: HeaderDataService) {

  }

  toggleMenu() {
    // this.tituloDaPagina = 'Novo valor';
    this._ativaMenu = !this._ativaMenu;
  }

  get isMenuOpen() {
    return this._ativaMenu;
  }

  handleInputSearch(valorAtualDaBusca: string) {
    // BroadCast de dados via serviço
    this.headerDataService.updateHeaderSearchValue(valorAtualDaBusca);
  }
}
