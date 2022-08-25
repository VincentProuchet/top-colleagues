import { Component, OnInit } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';
import { ColleagueComponent } from '../colleague/colleague.component';

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent implements OnInit {

  static DEFAULT_IMG = "./assets/logo.jpg";
  colleagues: Array<Colleague>;
  constructor() {
    this.colleagues = new Array();

  }

  ngOnInit(): void {
    this.colleagues.push(this.newColleague("Bend_Over", 10, ColleagueListComponent.DEFAULT_IMG));
    this.colleagues.push(this.newColleague("Mike_Hunt", 7, ColleagueListComponent.DEFAULT_IMG));
    this.colleagues.push(this.newColleague("Mie_Dickhearts", 25, ColleagueListComponent.DEFAULT_IMG));
    this.colleagues.push(this.newColleague("Dick_Bicks", 30, ColleagueListComponent.DEFAULT_IMG));
    this.colleagues.push(this.newColleague("Vulgar", -10, ColleagueListComponent.DEFAULT_IMG));
    this.colleagues.push(this.newColleague("Wisely", 60, ColleagueListComponent.DEFAULT_IMG));

  }
  newColleague(ps: string, s: number, ph: string): Colleague {
    return {
      pseudo: ps,
      score: s,
      photo: ph
    };

  }



}
