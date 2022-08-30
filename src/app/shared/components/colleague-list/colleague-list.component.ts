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
  /**une image par défault */
  static DEFAULT_IMG = "./assets/logo.jpg";
  /**la liste des colleagues */
  // @Input() colleagues: Array<Colleague> = new Array();
  // @Input() listVotes: Array<Vote> = new Array();
  /**
   *
   * @param colleagueservice c'est l'injection du singleton du service : colleagueService
   * parce qu'utilisé dans le template HTML
   *
   */
  constructor(public colleagueservice: ColleagueService) { }
  /**
   * ici on peuple la collection
   * maisd c'est juste pour l'exemple
   * oui, je me suis lâché sur les pseudos
   */
  ngOnInit(): void {

  }
  callVote(vote: Vote) {
    this.colleagueservice.addVote(vote);
    //vote.index = this.listVotes.length + 1
    //this.listVotes.push(vote);
    // this.listVotes.unshift(vote);
  }



}
