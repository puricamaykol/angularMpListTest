## What's this about? ##

This is a sample project featuring a component I've been working on, called MpList (I'll be turning it into a Module installable via NPM).

## Current features: ##

 - Fetch items from URL.
 - Specify the response object node containing items array. Otherwise, root is asume by default.
 - Refresh list on URL change (asuming you're using parametter in a query string that are subscebtible to change).
 - Build list from array.
 - Refresh list on data array change.
 - Emit event on item selection.
 - Emit event on data fetched.
 - Emit event on data not found.
 - You can define a list item unique id input, defaults to 'MpList' otherwise.
 - MpListItemDescriptionPipe (for now it prints a 'no description provided' message).
 - Refresh list using refreshList() method through local component variable.
 - Delete item method that might be called from template local variable.

 
  It implements ngOnChanges method. Since  ngOnChanges method gets triggered before OnInit and every Input is checked in the same order it is declared, it was possible to set a flag (fromService) that lets the component know  the way it's supposed to behave regardless that all the other parameters are set at the same time.

  By default MpList will expect a URL to be provided. If , on the contrary, 'fromService' Input is set to false, it will ignore the URL and try to use 'arrayData' instead.

  MpList depends on https://material.angular.io

  It's currently formed by three files mp-list.component.ts, mp-list.component.html and mp-list.component.css
## The road ahead ##

- Create a MpListModule
- Make it installable via NPM
- Emit event on ~~selected~~/checked
- Implement items with icon
- Implement items with lazy loaded thumbnails
- Implement items with menu button
- Allow multiple selection
- Allow swippable items to delete them
- Emit event on deleted item
- Allow custom item and list template
- Implement infinite scrolling
- Implement pull down to refresh list items
- Allow custom styles (SASS mixins)
- Implement Optional Search Box
- Implement i18n

----------

marvel-heroes.component.ts is the component using MpList component, there you can find the two ways to use it (Service URL or Array)

----------

Usage Examples
--------------

List From Service

**In you component class:**
```javascript
    //Dot separated string representing items array location inside service response
    _itemsLocation: string = "data.results";  
    _url: string = "https://gateway.marvel.com:443/v1/public/characters?..";
    _listFromServiceId: string = "listFromService";
```
**In your template:** 
```html
    <app-hero-detail #heroDetail></app-hero-detail>
    <mp-list #serviceMpList 
    [itemsLocation]="_itemsLocation" 
    [url]="_url" 
    (onItemSelected)="heroDetail.setDetail(serviceMpList)" 
    [listId]="_listFromServiceId">
    </mp-list>
    <button (click)="serviceMpList.deleteItem()" md-button>Delete</button>
    <button (click)="serviceMpList.refreshList()" md-button>Refesh</button>
    <button (click)="addNewItem(serviceMpList)" md-button>+Item</button>
```
As you can see app-hero-detail component has a setDetail method to which I'm passing a reference to my list component (I still don't know how much of a bad practice this is, but it was the way I found to successfully comunicate sibling components).

mpListComponent exposes a refresh and delete method. Both of them can be used from template local variables. refreshList() method only works when fromService property is set to true (this is its default value).

To add items to the list generated from service you can create a method in your controller that recieves a reference to mpList component so it can access mpList addItem( ) method like this:

```javascript
    addNewItem(object: any): void {
        object.addItem({ "name": "Test Item ", "description": "Item description" });
      }
```
List from static array

**In your controller:**
```javascript
    public addNoDescItemTolist(): void {
        this.addItemTolist(false);
      }
      public addDescItemTolist(): void {
        this.addItemTolist(true);
      }
      private addItemTolist(hasDescription: boolean): void {
        let itemDescription = '';
        if (hasDescription) {
          itemDescription = 'Items description';
        }
        let count = this._dataArray.length + 1;
        this._dataArray.push({ "name": "Test Item #" + count, "description": itemDescription });
    
      }
```    

**In your template:**
```html
    <mp-list #arrayMpList 
    [fromService]="_fromService" 
    [dataArray]="_dataArray" 
    (onItemSelected)="_onArrayListItemSelected($event)" 
    [listId]="_listFromArrayId">
    </mp-list>
	<button (click)="arrayMpList.deleteItem()">Delete</button>
    <button (click)="addDescItemTolist()">+Item</button>
    <button (click)="addNoDescItemTolist()">+Item No Desc.</button>
```

> You can add new items just by pushing new objects to the data array. 
> Delete method splice selected object out of the data array. 
