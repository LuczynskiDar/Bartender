import { ChosenCoctailsComponent } from './../chosen-coctails/chosen-coctails.component';
import { PaySummaryService } from './../pay-summary.service';
import { DrinkProviderService } from './../drink-provider.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sumary',
  templateUrl: './sumary.component.html',
  styleUrls: ['./sumary.component.scss']
})
export class SumaryComponent implements OnInit {

  constructor(private drinkProvider: DrinkProviderService, private paySummary: PaySummaryService) { }

  coctailList = '';
  ingredients = [];
  cost = '';
  ethanolMass = '';


  ngOnInit() {

      this.drinkProvider.coctailListEmitter.subscribe(chosenCoctails => {
        this.coctailList = this.paySummary.getDrinkList(chosenCoctails);
        this.ingredients = this.paySummary.calculateIngredients(chosenCoctails);
        this.cost = this.paySummary.calculateCost(this.ingredients);
        this.ethanolMass = this.paySummary.calculateEthanolMass(this.ingredients);
      });
    }

}
