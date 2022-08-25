import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LikeHate } from 'src/app/models/like-hate';

@Component({
  selector: 'tc-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss']
})
export class LikeHateComponent implements OnInit {
  /** binding pour activation/désactivation du bouton */
  @Input()
  score: number = 0;
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
   */
  like: LikeHate = LikeHate.LIKE;
  hate: LikeHate = LikeHate.HATE;

  constructor() { }

  ngOnInit(): void {
  }
  /**
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

}
