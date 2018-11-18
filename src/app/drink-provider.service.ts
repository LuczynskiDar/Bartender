import { CoctailListComponent } from './coctail-list/coctail-list.component';
import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrinkProviderService {

  constructor() { }

  @Output()
  drinkEmitter = new EventEmitter();
  @Output()
  coctailListEmitter = new EventEmitter();

  drinkProvider(coctail) {
    this.drinkEmitter.emit(coctail);
  }

  sendChosenCoctails(coctail) {
    this.coctailListEmitter.emit(coctail);
  }

}
