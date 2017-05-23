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

  _url: string = "https://gateway.marvel.com:443/v1/public/characters?ts=1492391838&apikey=08642cffce2821fcd176242d6d868280&hash=63fa86f9a42d4a312367d0e34fd5ba7a&offset=10&limit=5";

  _itemsLocation: string = "data.results";
  _rowsLocation: string = "baseObjectArray";
  _nameAttribute: string = "name";
  _fromService: boolean = false;
  _listFromArrayId: string = "listFromArray";
  _listFromServiceId: string = "listFromService";
  _dataArray: any[] = [
    { "itemId": 1, "name": "Adam Warlock", "description": "Adam Warlock is an artificially created human who was born in a cocoon at a scientific complex called The Beehive." },
    {"itemId": 2, "name": "Agent X (Nijo)", "description": " Originally a partner of the mind-altering assassin Black Swan, Nijo spied on Deadpool as part of the Swan's plan to exact revenge for Deadpool falsely taking credit for the Swan's assassination of the Four Winds crime family, which included Nijo's brother" },
    { "itemId": 3, "name": "item 3 de prueba", "description": "Descripción del item 3"},
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
    this.setSelectedItem(event.selecteditem);
  }
  setSelectedItem(object: any):void{
    this._arrayListSelectedItem = object;
  }
  _onServiceListItemSelected(event: any): void {
    this._serviceListSelectedItem = event.selectedItem;
  }
  public addNoDescItemTolist(): void {
    this.addItemTolist(false);
  }
  public addDescItemTolist(): void{
    this.addItemTolist(true);
  }
  private addItemTolist(hasDescription: boolean): void {
    let itemDescription = '';
    if (hasDescription) {
      itemDescription = 'Items description';
    }
    let count = this._dataArray.length + 1;
    this._dataArray.push({ "name": "Test Item #"+count, "description": itemDescription });

  }

  addNewItem(object: any): void{

    object.addItem({ "name": "Test Item ", "description": "Item description" });
    }

  goToLinkedIn(): void{
    console.log("linkedin");
    //https://www.linkedin.com/in/maykolpurica/

  window.open("https://www.linkedin.com/in/maykolpurica/", "_blank");
  }
  goToAbout(): void{
    //https://github.com/puricamaykol/angularMpListTest/blob/master/README.md
    window.open("https://github.com/puricamaykol/angularMpListTest/blob/master/README.md", "_blank");
  }

  viewDetails(): void{
    
  }
}
