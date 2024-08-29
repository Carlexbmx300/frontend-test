import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Game } from 'src/app/models/game.interface';
import { FilterPipe } from 'src/app/utils/pipes/filter.pipe';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent {
@Input() games:Game[] = []
@Input() query:string = '';
@Output() action = new EventEmitter<number>();

onClick(id:number){
  this.action.emit(id);
}

}
