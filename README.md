## What's this about? ##

This is a sample project featuring a component I've been working on.

MpList is the name of the component (I'll be turning it into a Module installable via NPM)

## Current features: ##

 - Fetch items from URL
 - Specify the response object node containing items array. Otherwise, root is asume by default.
 - Refresh list on URL change (asuming you're using parametter in a query string that are subscebtible to change)
 - Build list from array
 - Refresh list on data array change
 - Emit event on item selection
 - Emit event on data fetched
 - Emit event on data not found
 - Delete item method that might be called from template local variable
 - You can define a list item unique id input 
 - MpListItemDescriptionPipe (for now it prints a 'no description provided' message)
 
  It implements ngOnChanges method. Since  OnChanges method gets triggered before OnInit and every Input is checked in the same order it is declared, I can set a flag (fromService) that let know the component the way it's supposed o behave regardless that all the other parameters are set at the same time.

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

