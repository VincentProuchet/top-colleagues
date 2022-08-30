import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Colleague } from '../models/colleague';
import { Vote } from '../models/vote';
import { WelcomePage } from '../pages/welcome/welcome.page';
import { VoteService } from './vote.service';

@Injectable({
  providedIn: 'root'
})
export class ColleagueService implements OnDestroy {
  static API_USERS_URI = 'http://localhost:3000/users'

  private listColleague: Colleague[] = new Array();
  private colleageSubs!: Subscription;
  /**
   *
      * @param http : on récupérer l'injection httpClient pour pouvoir comminiquer avec le backEnd
   */
  constructor(private http: HttpClient) {
    console.log('ServiceColleague is running');

    this.init();
  }
  ngOnDestroy(): void {
    this.colleageSubs.unsubscribe();
  }

  init() {
    this.RefreshList();
    // this.add({ pseudo: "Ben_dOver", score: 10, photo: WelcomePage.DEFAULT_IMG });
    // this.add({ pseudo: "Mike_Hunt", score: 7, photo: WelcomePage.DEFAULT_IMG });
    // this.add({ pseudo: "Mie_Dickhearts", score: 25, photo: WelcomePage.DEFAULT_IMG });
    // this.add({ pseudo: "Dick_Bicks", score: 30, photo: WelcomePage.DEFAULT_IMG });
    // this.add({ pseudo: "Vulgar", score: -999, photo: WelcomePage.DEFAULT_IMG });
    // this.add({ pseudo: "Wisely", score: 999, photo: WelcomePage.DEFAULT_IMG });
  }

  list(): Colleague[] {
    // TODO use Mock
    return this.listColleague;
  }
  add(colleague: Colleague) {
    this.listColleague.push(colleague);
  }

  addVote(vote: Vote) {

    //    this.voteservice.add(vote);
    /**
     * c'est d'ici que l'on met à jour la bdd par le backend
     */
    this.http.post<Vote>(VoteService.API_VOTE_URL, vote).subscribe(
      {
        next: vote => console.log(vote),
        error: error => console.error(error)
      });



  }
  RefreshList(): void {
    this.listColleague = new Array<Colleague>();
    this.colleageSubs = this.http.get<Colleague[]>(ColleagueService.API_USERS_URI)
      .subscribe(
        data => this.listColleague = data
      );

  }
}
