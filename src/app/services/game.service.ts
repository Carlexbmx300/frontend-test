import { Injectable } from '@angular/core';
import { HttpService } from '../utils/services';
import { first, map, Observable } from 'rxjs';
import { Game, GameInfo } from '../models/game.interface';

@Injectable({
  providedIn: 'root'
})
export class GameService {
private endpointAll:string = '/games';
private endpointFind:string = '/game?id='

  constructor(private httpService:HttpService<Game[], GameInfo>) { }

  findAll(queryString:string=''): Observable<Game[] | undefined> {
    return this.httpService.findAll(`${this.endpointAll}${queryString}`).pipe(first(), 
    map((resp) => (resp ? resp: [])));
  }
  find(id:string): Observable<GameInfo | undefined> {
    return this.httpService.find(this.endpointFind,id).pipe(first(), 
    map((resp) => (resp ? resp: undefined)));
  }
}
