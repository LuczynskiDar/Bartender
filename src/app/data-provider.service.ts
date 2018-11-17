import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  receipts = [
    // tslint:disable-next-line:max-line-length
    {name: 'White Russian', ingredients: [{name: 'Vodka', volume: 60, pricePerUnit: 0.036, ethanolPercentage: 40}, {name: 'Light Cream', volume: 20, pricePerUnit: 0.012}, {name: 'Coffee Liqueur', volume: 30, pricePerUnit: 0.008, ethanolPercentage: 20}], imgSrc: 'https://www.thecocktaildb.com/images/media/drink/vsrupw1472405732.jpg'},
    // tslint:disable-next-line:max-line-length
    {name: 'Tequilla Sunrise', ingredients: [{name: 'Tequilla', volume: 40, pricePerUnit: 0.11, ethanolPercentage: 40}, {name: 'Orange juice', volume: 100, pricePerUnit: 0.005}], imgSrc: 'https://www.thecocktaildb.com/images/media/drink/jfvyog1530108909.jpg'},
    // tslint:disable-next-line:max-line-length
    {name: 'Gin & Tonic', ingredients: [{name: 'Gin', volume: 50, pricePerUnit: 0.07, ethanolPercentage: 40}, {name: 'Tonic', volume: 100, pricePerUnit: 0.006}], imgSrc: 'https://www.thecocktaildb.com/images/media/drink/jfvyog1530108909.jpg'},
    // tslint:disable-next-line:max-line-length
    {name: 'Long Island Ice Tea', ingredients: [{name: 'Vodka', volume: 15, pricePerUnit: 0.036, ethanolPercentage: 40}, {name: 'Rum', volume: 15, pricePerUnit: 0.026, ethanolPercentage: 40}, {name: 'Tequilla', volume: 15, pricePerUnit: 0.11, ethanolPercentage: 40}, {name: 'Gin', volume: 15, pricePerUnit: 0.08, ethanolPercentage: 40}, {name: 'Coke', volume: 60, pricePerUnit: 0.003}, {name: 'Limon', quantity: 0.125, pricePerUnit: 1}, ], imgSrc: 'https://www.thecocktaildb.com/images/media/drink/wx7hsg1504370510.jpg'},
    // tslint:disable-next-line:max-line-length
    {name: 'Flying Dutchman', ingredients: [{name: 'Gin', volume: 60, pricePerUnit: 0.08, ethanolPercentage: 40}, {name: 'Triple sec', volume: 15, pricePerUnit: 0.07, ethanolPercentage: 30}], imgSrc: 'https://www.thecocktaildb.com/images/media/drink/akik8t1504519958.jpg'},
    // tslint:disable-next-line:max-line-length
    {name: 'Freddy Kruger', ingredients: [{name: 'Jagermeister', volume: 15, pricePerUnit: 0.09, ethanolPercentage: 40}, {name: 'Sambuca', volume: 15, pricePerUnit: 0.10, ethanolPercentage: 40}], imgSrc: 'https://www.thecocktaildb.com/images/media/drink/tuppuq1461866798.jpg'},
    // tslint:disable-next-line:max-line-length
    {name: 'Ruby Tuesday', ingredients: [{name: 'Gin', volume: 60, pricePerUnit: 0.08, ethanolPercentage: 40}, {name: 'Cranberry juice', volume: 150, pricePerUnit: 0.005}, {name: 'Grenadine', volume: 5, pricePerUnit: 0.005}], imgSrc: 'https://www.thecocktaildb.com/images/media/drink/qsyqqq1441553437.jpg'},
    // tslint:disable-next-line:max-line-length
    {name: 'Vodka with vodka', ingredients: [{name: 'Vodka', volume: 200, pricePerUnit: 0.035, ethanolPercentage: 40}], imgSrc: 'https://www.thecocktaildb.com/images/media/drink/lmj2yt1504820500.jpg'},
    // tslint:disable-next-line:max-line-length
    {name: 'Whiskey & Coke', ingredients: [{name: 'Whiskey', volume: 50, pricePerUnit: 0.070, ethanolPercentage: 40}, {name: 'Coke', volume: 100, pricePerUnit: 0.003}], imgSrc: 'https://bevvyco.s3.amazonaws.com/img/drinks/aa/liaa/whiskey-and-coke-5b5766b04fd7d1673ac4b7af52062899-lg.jpg'},
  ];

  getCoctailList() {
    return this.receipts;
  }
  constructor() { }
}
