import { Injectable } from '@angular/core';
import { LikeHate } from '../models/like-hate';
import { Vote } from '../models/vote';
import { WelcomePage } from '../pages/welcome/welcome.page';
import { LikehateService } from './likehate.service';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  private _cptHate: number = 0;
  private _cptLike: number = 0;

  private listVote: Vote[] = new Array();

  constructor(private srvLH: LikehateService) {

    console.log('service Vote is running');
  }

  init() {
    this.listVote.push({
      colleague: { pseudo: "Ben-dOver", score: 10, photo: WelcomePage.DEFAULT_IMG },
      vote: LikeHate.LIKE, index: 1
    });
    this.listVote.push({
      colleague: { pseudo: "Vulgar", score: -999, photo: WelcomePage.DEFAULT_IMG },
      vote: LikeHate.HATE, index: 2
    });
    this.listVote.push({
      colleague: { pseudo: "M_Dickhearts", score: 10, photo: WelcomePage.DEFAULT_IMG },
      vote: LikeHate.LIKE, index: 3
    });
  }
  list(): Vote[] {
    return this.listVote;
  }
  tri() {

    this.listVote.sort((v1, v2) => {
      if (v1.index > v2.index) return -1;
      else if (v1.index < v2.index) return 1;
      else return 1;
    }
    )
  }

  add(vote: Vote) {
    switch (vote.vote) {
      /** c'est ici que l'on incrémente les compteur du LikeHateService */
      case LikeHate.LIKE:
        this.srvLH.nextLike(++this._cptLike);
        break;
      case LikeHate.HATE:
        this.srvLH.nextHate(++this._cptHate);
        break;
    }
    //** l) on ajoute le vote à l'historique des votes. */
    this.listVote.push(vote);

  }
  delete(index: number) {
    this.listVote.splice(index, 1);
  }
  triInverse() {
    this.listVote.sort((v1, v2) => {
      if (v1.index > v2.index) return -1;
      else if (v1.index < v2.index) return 1;
      else return 1;
    }
    )
  }

}
