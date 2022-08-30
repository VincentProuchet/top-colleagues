import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Colleague } from '../models/colleague';
import { Vote } from '../models/vote';
import { WelcomePage } from '../pages/welcome/welcome.page';
import { VoteService } from './vote.service';

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {

  private listColleague: Colleague[] = new Array();
  private voteTri: boolean = true;
  /**
   *
   * @param voteservice : l'injection du service de vote
   * @param http : on récupérer l'injection httpClient pour pouvoir comminiquer avec le backEnd
   */
  constructor(private voteservice: VoteService, private http: HttpClient) {
    console.log('ServiceColleague is running');

    this.init();
  }

  init() {
    this.add({ pseudo: "Ben_dOver", score: 10, photo: WelcomePage.DEFAULT_IMG });
    this.add({ pseudo: "Mike_Hunt", score: 7, photo: WelcomePage.DEFAULT_IMG });
    this.add({ pseudo: "Mie_Dickhearts", score: 25, photo: WelcomePage.DEFAULT_IMG });
    this.add({ pseudo: "Dick_Bicks", score: 30, photo: WelcomePage.DEFAULT_IMG });
    this.add({ pseudo: "Vulgar", score: -999, photo: WelcomePage.DEFAULT_IMG });
    this.add({ pseudo: "Wisely", score: 999, photo: WelcomePage.DEFAULT_IMG });


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


    if (this.voteTri) {
      this.voteservice.tri();
    }
  }
}
