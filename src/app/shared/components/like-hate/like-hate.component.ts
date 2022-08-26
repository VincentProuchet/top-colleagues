import { outputAst } from '@angular/compiler';
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
  /**instance de LikeHate.LIKE
   * apparement le template ne peux pas directemenr passer l'énumération
   * à l'eventEmitter
   *  il lui faut une variable
   * pour chaque element de l'énumération
   * Ils sont commenté parce que je voulais les garder pour l'exemple
   * mais autant qu'ils ne se retrouvent pas des Les fichiers transpillés
   */
  //like: LikeHate = LikeHate.LIKE;
  //hate: LikeHate = LikeHate.HATE;


  constructor() { }

  ngOnInit(): void {
  }
  /**
   * @deprecated
   * cette fonction est un passe plat pour l'event emitter
   * c'est bien elle que l'action dans le template appelle
   * mais elle ne fait que lancer l'eventEmmiter et lui passe d'éventuelles valeurs
   * ici LikeHate.LIKE
   * ou  LikeHate.HATE
   *    * @param choix Like ou Hate
   */

  choice(choix: LikeHate): void {
    this.choix.emit(choix);
  }
  /**
   * uneautre maniére de faire
   * qui ne neccessite pas d'avoir une variable
   * pour chaque element de l'enum
   *
   * favoriser cette version, il semble en effet qu'elle soit moins
   * gourmande en temps processeur
   */
  Like(): void {
    this.choix.emit(LikeHate.LIKE);
  }
  Hate(): void {
    this.choix.emit(LikeHate.HATE);
  }

}

