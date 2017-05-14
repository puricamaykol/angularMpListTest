import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { marvelHero } from './marvelHero';

@Component({
  selector: 'marvel-heroes',
  templateUrl: './marvel-heroes.component.html'
})
export class MarvelHeroesComponent implements OnInit {
  heroes: marvelHero[];
  selectedHero: marvelHero;

  _url: string = "https://gateway.marvel.com:443/v1/public/characters?ts=1492391838&apikey=08642cffce2821fcd176242d6d868280&hash=63fa86f9a42d4a312367d0e34fd5ba7a&offset=10";

  _itemsLocation: string = "data.results";
  _rowsLocation: string = "baseObjectArray";
  _nameAttribute: string = "name";
  _fromService: boolean = false;
  _listFromArrayId: string = "listFromArray";
  _listFromServiceId: string = "listFromService";
  _dataArray: any[] = [
    { "id": 1, "name": "item 1 de prueba", "description": "Descripción del item 1" },
    { "id": 2, "name": "item 2 de prueba", "description": "Descripción del item 2" },
    { "id": 3, "name": "item 3 de prueba", "description": "Descripción del item 3" },
  ];

  _arrayListSelectedItem: any;
  _serviceListSelectedItem: {};

  constructor() { }

  ngOnInit(): void {

  }
  /**
   * [_onItemSelected description]
   * @param {{}} item [description]
   */
  _onArrayListItemSelected(event: any): void {
    console.log(event.selectedItem, "select element ");
    this._arrayListSelectedItem = event.selecteditem;
  }
  _onServiceListItemSelected(event: any): void {
    this._serviceListSelectedItem = event.selectedItem;
  }

  public addItemTolist(): void {
    let count = this._dataArray.length + 1;
    this._dataArray.push({ "name": "item " + count + " de prueba", "description": "Descripción del item " + count });
  }

}
