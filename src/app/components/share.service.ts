import { Injectable, EventEmitter } from '@angular/core';
import * as StatueList from './statue-data.json';
import { Statue } from './statue.interface';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  statuesList: Statue[] = [];
  statue!: Statue;

  constructor() { 
    let stringList: string = JSON.stringify(StatueList);
    this.statuesList = JSON.parse(stringList).statuesList;
  }

  getStatue(id: number) {
    for (let i = 0; i < this.statuesList.length; i++){
      if (this.statuesList[i].statueId == id) {
        this.statue = this.statuesList[i];
      }
    }
    return this.statue;
  }
}
