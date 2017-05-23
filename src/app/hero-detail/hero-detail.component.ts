import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {

  constructor() { }
  _selectedItem:any = {};
  
  public setDetail(obj: any){
	  this._selectedItem = obj.getSelectedItem();
	  console.log(this._selectedItem);
  }

}
