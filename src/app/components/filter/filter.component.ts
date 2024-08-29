import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameSearch } from 'src/app/models/game.interface';
import { Options } from 'src/app/models/options.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit{
 @Output() onSearch = new EventEmitter<string>();
 @Output() onSelectOption = new EventEmitter<GameSearch>();
 @Input() query:string = '';
 @Input() options:Options = {genres:[], platforms:[]};
 @Input() queryParams:GameSearch = {value:'', key:''};
  constructor(){}
  ngOnInit(): void {}

  search(event:Event){
    let value = (event.target as HTMLInputElement).value;
    this.query = value;
    this.onSearch.emit(this.query)
  }

  onSelect(event:Event, type:string){
    let value = (event.target as HTMLInputElement).value;
    this.queryParams['value']=value;
    this.queryParams['key'] = type;
    this.onSelectOption.emit(this.queryParams)
  }
}
