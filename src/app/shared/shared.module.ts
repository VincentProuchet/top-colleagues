import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeHateComponent } from './components/like-hate/like-hate.component';
import { ColleagueComponent } from '../shared/components/colleague/colleague.component';
import { ColleagueListComponent } from '../shared/components/colleague-list/colleague-list.component';
import { ScorePipe } from '../shared/pipes/score.pipe';

/**
 * tous les elements d'un module sont
 * privés pour tous les autres modules
 * donc on utilise
 * exports:[] dans @NgModule
 * pour le rendre public
 */

@NgModule({
  declarations: [
    LikeHateComponent,
    ColleagueComponent,
    ColleagueListComponent,
    ScorePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LikeHateComponent,
    ColleagueComponent,
    ColleagueListComponent
  ]
})
export class SharedModule { }
