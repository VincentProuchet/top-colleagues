import { Component, Input, OnInit } from '@angular/core';

import { Colleague } from 'src/app/models/colleague';

import { Vote } from 'src/app/models/vote';
import { ColleagueService } from 'src/app/providers/colleague.service';

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent implements OnInit {

  /**
   *
   * @param colleagueservice c'est l'injection du singleton du service : colleagueService
   * parce qu'utilisé dans le template HTML
   *
   */
  constructor(public colleagueservice: ColleagueService) { }

  ngOnInit(): void { }

  callVote(vote: Vote) {
    this.colleagueservice.addVote(vote);
  }

}
