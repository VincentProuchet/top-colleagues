import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, map, Observable, Subscription } from 'rxjs';
import { LikeHate } from 'src/app/models/like-hate';
import { Vote } from 'src/app/models/vote';
import { VoteService } from 'src/app/providers/vote.service';

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent implements OnInit, OnDestroy {


  votesTab!: Vote[];

  /** refresh */
  private _interval: Observable<any>;
  private _intervalSub: Subscription;
  private refreshTime: number = 2000;


  constructor(public srvVotes: VoteService) {

    this._interval = interval(this.refreshTime);
    this._intervalSub = this._interval.subscribe(
      () => {
        this.srvVotes.findAll()
          .pipe(
            map(data => data.reverse())
          )

          .subscribe(
            data => this.votesTab = data
          );
      }
    )

  }
  ngOnDestroy(): void {
    this._intervalSub.unsubscribe();
  }

  ngOnInit(): void {

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


