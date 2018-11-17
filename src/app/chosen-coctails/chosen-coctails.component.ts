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

  ngOnInit() {
    this.drinkProvider.drinkEmitter.subscribe((coctail) => {
      this.chosenCoctails.push(coctail);
    });

  }

}
