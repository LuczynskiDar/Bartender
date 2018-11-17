import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrinkProviderService {

  constructor() { }

  @Output()
  drinkEmitter = new EventEmitter();

  drinkProvider(coctail) {
    this.drinkEmitter.emit(coctail);
  }
}
