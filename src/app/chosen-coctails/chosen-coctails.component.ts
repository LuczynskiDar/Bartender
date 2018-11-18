import { Component, OnInit } from '@angular/core';
import { DrinkProviderService } from '../drink-provider.service';

@Component({
  selector: 'app-chosen-coctails',
  templateUrl: './chosen-coctails.component.html',
  styleUrls: ['./chosen-coctails.component.scss']
})
export class ChosenCoctailsComponent implements OnInit {

  constructor(private drinkProvider: DrinkProviderService) { }
  chosenCoctails = [];


  sumUp() {
    this.drinkProvider.sendChosenCoctails(this.chosenCoctails);
  }

  increaseQuantity(coctail) {
    coctail.quantity++;
  }

  decraseQuantity(coctail) {
    if (coctail.quantity > 1) {
      coctail.quantity--;
    } else {
      let coctailIndex = 0;
      this.chosenCoctails.map((drink, index) => {
        if (drink.name === coctail.name) {
          drink.quantity++;
          coctailIndex = index;
        }
      });
      this.chosenCoctails.splice(coctailIndex, 1);
    }
  }

  ngOnInit() {
    this.drinkProvider.drinkEmitter.subscribe((coctail) => {
      let isNew = true;
      this.chosenCoctails.map(drink => {
       if (drink.name === coctail.name) {
        drink.quantity++;
        isNew = false;
       }
      });
      if (isNew) {
       coctail.quantity = 1;
       this.chosenCoctails.push(coctail);
      }
     });

    // this.drinkProvider.drinkEmitter.subscribe((coctail) => {
    //   this.chosenCoctails.push(coctail);
    // });

  }

}
