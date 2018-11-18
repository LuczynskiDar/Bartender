import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoctailListComponent } from './coctail-list/coctail-list.component';
import { HeaderComponent } from './header/header.component';
import { ChosenCoctailsComponent } from './chosen-coctails/chosen-coctails.component';
import { SumaryComponent } from './sumary/sumary.component';
import { DataProviderService } from './data-provider.service';
import { DrinkProviderService } from './drink-provider.service';
import { PaySummaryService } from './pay-summary.service';

@NgModule({
  declarations: [
    AppComponent,
    CoctailListComponent,
    HeaderComponent,
    ChosenCoctailsComponent,
    SumaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataProviderService, DrinkProviderService, PaySummaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
