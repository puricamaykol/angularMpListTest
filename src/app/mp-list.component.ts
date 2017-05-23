import { Component, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'mp-list',
  templateUrl: './mp-list.component.html',
  styleUrls: ['./mp-list.component.css']
})
export class MpList implements OnChanges {
  /**
   * This flag indicates wheather the list shall be build from a remote service response or not
   */
  @Input() fromService: boolean = true;
  /**
   * Items Array (It will be used only if fromService Input is FALSE)
   */
  @Input() dataArray: any[] = [];
  /**
  * Input: String containing the object tree names separated by dots to the items array
  * If not supplied root is asumed by default
  *  @example 'data.results' 
  */
  @Input() itemsLocation: string = '';
  /**
   * Input: Service base url
   */
  @Input() url: string = '';
  /**
   * List Id String
   */
  @Input() listId: string;
  /**
   * Event emitted whenever an element get selected. Contains the item object in its payload.
   * @param {[type]} ) onItemSelected = new EventEmitter<{}>( [description]
   */
  @Output() onItemSelected = new EventEmitter<{}>();
  /**
   * Event emitted when no items are found
   * @param {[type]} ) onItemsNotFound = new EventEmitter( [description]
   */
  @Output() onItemsNotFound = new EventEmitter();
  /**
   * Event emitted whenever list items are fetched
   * @param {[type]} ) onItemsFetched = new EventEmitter<{}>( [description]
   */
  @Output() onItemsFetched = new EventEmitter<void>();
  /**
   * Event emitted whenever an item gets deleted
   * @param {[type]} ) onItemsFetched = new EventEmitter<{}>( [description]
   */
  @Output() onItemDeleted = new EventEmitter<{}>();



  public items: any[] = [];

  _url: string = '';

  _itemsLocationTree: string[] = [];

  _titleLabel: string = '';

  _selectedItem: {} = {};

  _dataArray: any[] = [];

  _fromService: boolean = true;

  _listId: string = 'MpList';

  constructor(private http: Http, public snackBar: MdSnackBar) { }
  /**
   * This method retrieves an array of objects given an url
   * @param  {string}         url service url
   * @return {Promise<any[]>}     A Promise containing an array of objects
   */
  private getItems(url: string): Promise<any[]> {
    let me = this;
    return this.http.get(url)
      .toPromise()
      .then(response => me.getItemsArray(response.json()))
      .catch(this.handleError);
  }
  /**
   * [_buildList description]
   */
  private _buildListFromService(): void {
    let me = this;
    me.items = [];
    me.getItems(me._url).then(function(items) {
      me.items = items;
      if (items.length > 0) {
        me.onItemsFetched.emit();
      } else {
        me.onItemsNotFound.emit();
      }
    }
    );
  }
  private _buildListFromArray() {
    this.items = this._dataArray;
  }
  /**
   * Implements the ngOnChanges method
   * @param {SimpleChange}} changes [description]
   */
  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    let url = '';
    let itemsLocation = '';
    let me = this;
    for (let propName in changes) {
      let changedProp = changes[propName];
      if (propName === 'fromService') {
        me._fromService = changedProp.currentValue;
      }
      if (propName === 'dataArray' && !me._fromService) {
        me._dataArray = changedProp.currentValue;
        me._buildListFromArray();
      }

      if (propName === 'itemsLocation') {
        itemsLocation = changedProp.currentValue;
        if (itemsLocation !== '') {
          me.getLocationTreeArray(itemsLocation);
        }

      }
      if (propName === 'url' && me._fromService) {
        me._url = changedProp.currentValue;
        me._buildListFromService();
      }
      if (propName === 'listId') {
        me._listId = changedProp.currentValue;
      }

    }
  }
    /**
     * Error handler for the HTTP request
     * @param  {any}          error 
     * @return {Promise<any>}  
     */
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
  /**
   * This method handles de click event on an item
   * @method onSelect
   * @param {{}} item [description]
   */
  public onSelect(item: {}): void {
    this._selectedItem = item;
    this.onItemSelected.emit({ "listId": this._listId, "selectedItem": this._selectedItem });
  }
  /**
   * Returns an array of nodes to the items array in the response
   * @param {string} locationString [description]
   */
  private getLocationTreeArray(locationString: string): void {
    if (locationString !== null || locationString !== '') {
      this._itemsLocationTree = locationString.split('.');
    } else {
      this._itemsLocationTree = [];
    }
  }
  /**
   * Gets items array from response object and items location string
   * @param  {any} res [description]
   * @return {any}     [description]
   */
  private getItemsArray(res: any): any {
    let itemsLocationTree = this._itemsLocationTree;
    let items: any = res;
    if (itemsLocationTree.length > 0) {
      for (let i = 0; i < itemsLocationTree.length; i++) {
        items = items[itemsLocationTree[i]];
      }
      return items;
    }
    return res;
  }
  /**
   * Refreshes the list
   */
  public refreshList(): void {
    if (this._fromService) {
      this._buildListFromService();
    } else {
      this._buildListFromArray();
    }
  }
  /**
   * Deletes an item from the list items array
   * 
   */
  public deleteItem(): void {
    let index = this.items.indexOf(this._selectedItem);
    if (index > -1) {
      this.onItemDeleted.emit(this._selectedItem);
      this.items.splice(index, 1);
      this._selectedItem = {};
    }else{
      this.snackBar.open("No item selected", "", {
        duration: 2000,
      });
    }
  }

  public getSelectedItem(): any{
    return this._selectedItem;
  }

  public addItem(object: {}): void{
    if(object){
      this.items.push(object);
    }
  }
}
