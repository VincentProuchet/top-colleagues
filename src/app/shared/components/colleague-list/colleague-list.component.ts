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
  colleagues: Array<Colleague> = new Array();

  constructor() { }
  /**
   * ici on peuple la collection
   * maisd c'est juste pour l'exemple
   * oui, je me suis lâché sur les pseudos
   */
  ngOnInit(): void {
    this.colleagues.push(this.newColleague("Ben_dOver", 10, ColleagueListComponent.DEFAULT_IMG));
    this.colleagues.push(this.newColleague("Mike_Hunt", 7, ColleagueListComponent.DEFAULT_IMG));
    this.colleagues.push(this.newColleague("Mie_Dickhearts", 25, ColleagueListComponent.DEFAULT_IMG));
    this.colleagues.push(this.newColleague("Dick_Bicks", 30, ColleagueListComponent.DEFAULT_IMG));
    this.colleagues.push(this.newColleague("Vulgar", -999, ColleagueListComponent.DEFAULT_IMG));
    this.colleagues.push(this.newColleague("Wisely", 999, ColleagueListComponent.DEFAULT_IMG));

  }
  /**
   *
   * cette fonction ne sertt que aux tests
   * @param ps pseudo
   * @param s score
   * @param ph photo URL
   * @returns une instance de l'interface Colleague
   * c'est un peu absurde de faire ça puisqu'il suffirait de faire une
   * classe implementant l'interface
   * MAIS,  ici le but est de mettre la lumière sur le principe de contrat
   * ce que vous renvoyez doit respecter le contrat de l'interface
   *
   */
  newColleague(ps: string, s: number, ph: string): Colleague {
    return {
      pseudo: ps,
      score: s,
      photo: ph
    };

  }



}
