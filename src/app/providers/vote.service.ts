import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LikeHate } from '../models/like-hate';
import { Vote } from '../models/vote';
import { LikehateService } from './likehate.service';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  static API_VOTE_URL = "http://localhost:3000/votes";

  private _cptHate: number = 0;
  private _cptLike: number = 0;

  private listVote: Vote[] = new Array();

  constructor(private srvLH: LikehateService, private http: HttpClient) {

    console.log('service Vote is running');
  }

  findAll(): Observable<Vote[]> {
    return this.http.get<Vote[]>(VoteService.API_VOTE_URL);
  }
  /**
   *
   * @returns Observable<Vote[]> pour | async dans

   * le composant voting-history
   */
  list(): Observable<Vote[]> {

    return this.findAll();
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
