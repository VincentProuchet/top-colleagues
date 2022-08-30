import { Component, Input, OnInit } from '@angular/core';
import { LikeHate } from 'src/app/models/like-hate';
import { Vote } from 'src/app/models/vote';
import { VoteService } from 'src/app/providers/vote.service';
import { ScorePipe } from '../../pipes/score.pipe';
import { ColleagueListComponent } from '../colleague-list/colleague-list.component';
import { ColleagueComponent } from '../colleague/colleague.component';

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent implements OnInit {


  //@Input() listeVotes: Array<Vote> = new Array();

  constructor(public voteservice: VoteService) { }

  ngOnInit(): void {

    /**
     *
     this.listeVotes.push({
       colleague: { pseudo: "Sylvie", score: 200, photo: ColleagueListComponent.DEFAULT_IMG },
      vote: LikeHate.LIKE
    });
    this.listeVotes.push({
      colleague: { pseudo: "Sylvie", score: 400, photo: ColleagueListComponent.DEFAULT_IMG },
      vote: LikeHate.HATE
    });
    this.listeVotes.push({
      colleague: { pseudo: "Sylvie", score: 10, photo: ColleagueListComponent.DEFAULT_IMG },
      vote: LikeHate.LIKE
    });

    */

    // this.voteservice.list().sort((v1, v2) => {
    //   if (v1.index > v2.index) return -1;
    //   else if (v1.index < v2.index) return 1;
    //   else return 1;
    // }
    // )
  }
  /**
   *
   * @param vote
   */
  supprimer(index: number): void {
    // this.voteservice.list().splice(index, 1);
  }

  getAvisVote(ivote: Vote): string {
    let phrase = "la phrase ";
    let likeHate: string;
    let emoticone: string;
    switch (ivote.vote) {
      case LikeHate.HATE:
        likeHate = "détesté";
        emoticone = '-:(';
        break;
      case LikeHate.LIKE:
        likeHate = "aimé";
        emoticone = '-:)';

        break;

    }
    return `
    ${ivote.colleague.pseudo} est ${likeHate}, et a désormais un score de:${ivote.colleague.score}
${emoticone}
`;

  }


}
