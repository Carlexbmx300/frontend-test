import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Game, GameSearch } from 'src/app/models/game.interface';
import { Options, OptionsAll } from 'src/app/models/options.interface';
import { GameService } from 'src/app/services/game.service';
import { QueryStringBuilder } from 'src/app/utils/helpers/query-string-builder';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit, OnDestroy {
  unsubscribe:Subscription[]=[]
  games:Game[] = [];
  query:string = '';
  queryString:string = '?sort-by=alphabetical'
  options:Options = OptionsAll;
  queryParam:{[key:string]:string} = {'sort-by':'alphabetical'} ;
  querySearch:string= '';

  constructor(
    private gameService:GameService,
    private router:Router
  ){}
  ngOnInit(): void {
    this.getGames();
  }
  getGames(){
    const sub = this.gameService.findAll(this.queryString).subscribe(res=>{
      if(!res) return;
      this.games = res;
    })
    this.unsubscribe.push(sub);
  }
  search(event: string) {
    let value = event;
    this.query = value;
  }
  onSelect(event:GameSearch){
    let value = event;
    if(value.value !== ''){
      this.queryParam[value.key] = value.value;
      let q  = QueryStringBuilder(this.queryParam, value)
      this.queryString = `?${q}`;
    }else{
      delete this.queryParam[value.key];
      value = {value:'', key:''};
      let q  = QueryStringBuilder(this.queryParam, value)
      this.queryString = `?${q}`;
    }
    this.getGames();
  }
  toDetail(id:number){
    this.router.navigateByUrl(`game/${id}`);
  }
  ngOnDestroy(): void {
    this.unsubscribe.forEach(sub=>{
      sub.unsubscribe();
    })
  }
}
