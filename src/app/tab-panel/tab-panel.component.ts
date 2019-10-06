import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from './../tab/tab.component';

@Component({
  selector: 'tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['../tab-panel.component.scss']
})
export class TabPanelComponent implements AfterContentInit {

  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>

  constructor() { }

  ngAfterContentInit() {
   // console.log('tabs', this.tabs)
   const selectedTab = this.tabs.find(tab => tab.selected);
   console.log('stab', selectedTab);
   if(!selectedTab){
     this.tabs.first.selected = true;
   }
  }

  selectTab(val: TabComponent){
    this.tabs.forEach(tab => tab.selected = false);
    val.selected = true;
  }

}
