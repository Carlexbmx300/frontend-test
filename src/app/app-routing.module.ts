import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './views/game-list/game-list.component';
import { GameDatailComponent } from './views/game-datail/game-datail.component';

const routes: Routes = [
  { path: '',
    component: GameListComponent
  },
  { path: 'game/:id',
    component: GameDatailComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
