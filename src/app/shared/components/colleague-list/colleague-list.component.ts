import { Component, OnInit } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent implements OnInit {
  /**une image par défault */
  static DEFAULT_IMG = "./assets/logo.jpg";
  /**la liste des colleagues */
  colleagues: Array<Colleague>;
  /**
   * initialisation du tableau dés la création
   */
  constructor() {
    this.colleagues = new Array();

  }
  /**
   * ici on peuple la collection
   * maisd c'est juste pour l'exemple
   * oui, je me suis lâché sur les pseudos
   */
  ngOnInit(): void {
    this.colleagues.push(this.newColleague("Bend_Over", 10, ColleagueListComponent.DEFAULT_IMG));
    this.colleagues.push(this.newColleague("Mike_Hunt", 7, ColleagueListComponent.DEFAULT_IMG));
    this.colleagues.push(this.newColleague("Mie_Dickhearts", 25, ColleagueListComponent.DEFAULT_IMG));
    this.colleagues.push(this.newColleague("Dick_Bicks", 30, ColleagueListComponent.DEFAULT_IMG));
    this.colleagues.push(this.newColleague("Vulgar", -10, ColleagueListComponent.DEFAULT_IMG));
    this.colleagues.push(this.newColleague("Wisely", 60, ColleagueListComponent.DEFAULT_IMG));

  }
  /**
   * @param ps pseudo
   * @param s score
   * @param ph photo URL
   * @returns une instance de 'linterface Colleague
   */
  newColleague(ps: string, s: number, ph: string): Colleague {
    return {
      pseudo: ps,
      score: s,
      photo: ph
    };

  }



}
