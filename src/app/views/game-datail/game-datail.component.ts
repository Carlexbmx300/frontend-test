import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, finalize, Subscription } from 'rxjs';
import { Game, GameInfo } from 'src/app/models/game.interface';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-datail',
  templateUrl: './game-datail.component.html',
  styleUrls: ['./game-datail.component.scss']
})
export class GameDatailComponent implements OnInit, OnDestroy {
  game:GameInfo;
  unsubscribe:Subscription[] = [];
  id:string;
  loadingGame$ = new BehaviorSubject<boolean>(false)
  constructor(
    private aRoute:ActivatedRoute,
    private router:Router,
    private gameService:GameService
  ){}
  ngOnInit(): void {
    this.getGame();
  }
  getGame(){
    this.id = this.aRoute.snapshot.paramMap.get('id');
    this.loadingGame$.next(true)
    const sub = this.gameService.find(this.id).pipe(finalize(()=>{
      this.loadingGame$.next(false);
    })).subscribe(res=>{
      this.game = res;
    })
    this.unsubscribe.push(sub);
  }

  goBack(){
    this.router.navigateByUrl('');
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach(sub=>{
      sub.unsubscribe();
    })
  }
}
