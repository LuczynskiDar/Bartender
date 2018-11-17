import { DataProviderService } from './../data-provider.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coctail-list',
  templateUrl: './coctail-list.component.html',
  styleUrls: ['./coctail-list.component.scss']
})
export class CoctailListComponent implements OnInit {

  constructor(private dataProvider: DataProviderService) { }

  coctailList = [];
  ngOnInit() {
    this.coctailList = this.dataProvider.getCoctailList();
  }
}
