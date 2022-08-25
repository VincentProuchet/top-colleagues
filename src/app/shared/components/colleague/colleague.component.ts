import { Component, Input, OnInit } from '@angular/core';
import { LikeHate } from 'src/app/models/like-hate';
import { Colleague } from 'src/app/models/colleague';

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent implements OnInit {
  // permet de faire rentrer les données en utilisant le nom de la variable [person] = données à entrer
  @Input()
  person !: Colleague;

  constructor() { }
  ngOnInit(): void { }
  /**
   *
   * @returns une instance de l'interface colleague
   */
  getInterface(): Colleague {
    return {
      pseudo: "Robert",
      score: -999,
      photo: ""
    }
  }
  /**
   * Event
   * bouton like
   * bouton Hate
   * met à jour le score
   */
  likes(val: LikeHate) {
    if (val == LikeHate.LIKE) {
      this.person.score += 1;
    }
    else if (val == LikeHate.HATE) {
      this.person.score -= 1;
    }

  }
}
