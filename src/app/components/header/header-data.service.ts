import { Injectable, EventEmitter } from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class HeaderDataService {

  mudancasNovalorDaBusca: EventEmitter<string> = new EventEmitter();

  constructor() {}

  updateHeaderSearchValue(valorAtualDaBusca) {
    console.log('Log!', this.mudancasNovalorDaBusca);
    this.mudancasNovalorDaBusca
      .emit(valorAtualDaBusca);
  }

  listenHeaderSearchChanges() {
    return this.mudancasNovalorDaBusca;
  }
}
