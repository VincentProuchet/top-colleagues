import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LikeHate } from 'src/app/models/like-hate';

@Component({
  selector: 'tc-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss']
})
export class LikeHateComponent implements OnInit {
  /**
   * gestion de l'état des bouton
   */
  @Input() hateDisabled: boolean = false;
  @Input() likeDisabled: boolean = false;
  /**event emiter pour que le composant parent puisse
   * exécuter la fonction adapté
   */
  @Output()
  choix: EventEmitter<LikeHate> = new EventEmitter<LikeHate>();
  constructor() { }

  ngOnInit(): void { }
  /**
   * une autre maniére de faire
   * qui ne neccessite pas d'avoir une variable
   * pour chaque element de l'enum
   *
   * favoriser cette version, il semble en effet qu'elle soit moins
   * gourmande en temps processeur
   */
  Like(): void {
    // Déclencher le futur next sur service LIKE cpt
    // l'affichage est mise à jour dans le composant
    this.choix.emit(LikeHate.LIKE);
  }
  Hate(): void {
    // Déclencher le futur next sur service HATE cpt
    this.choix.emit(LikeHate.HATE);
  }

}

