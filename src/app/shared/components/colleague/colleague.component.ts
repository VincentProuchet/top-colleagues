import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';
import { LikeHate } from 'src/app/models/like-hate';
import { Vote } from 'src/app/models/vote';
import { LikehateService } from 'src/app/providers/likehate.service';

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss'],

})
export class ColleagueComponent implements OnInit {
  // permet de faire rentrer les données en utilisant le nom de la variable [person] = données à entrer
  @Input()
  colleague: Colleague = { pseudo: 'PErsonne', score: 0, photo: './assets/logo.jpg' };

  @Output() emetVote: EventEmitter<Vote> = new EventEmitter<Vote>();


  constructor() { }
  ngOnInit(): void { }

  /**
   * Event
   * bouton like
   * bouton Hate
   * met à jour le score
   */
  likes(val: LikeHate) {
    // un switch ça serait pas mal aussi
    if (val == LikeHate.LIKE) {
      this.colleague.score += 1;
    }
    else if (val == LikeHate.HATE) {
      this.colleague.score -= 1;
    }
    this.emetVote.emit({ colleague: { ...this.colleague }, vote: val, index: 0 });
  }
}
