import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'tc-collegues',
  // template: `mettez ici toute votre vue html      `
  //,// fin du template

  templateUrl: './collegues.component.html',
  styleUrls: ['./collegues.component.scss']
})


export class ColleguesComponent implements OnInit {

  @Input() nom: string = "";
  /** Je déclare une entrée pour le composant */
  @Input("prenom") monPrenom !: string;

  // prise en charge d'un event, que l'on appele chgPrenom
  @Output() chgPrenom: EventEmitter<string> = new EventEmitter<string>();

  uneImage = "/assets/logo.jpg";
  unChamp !: string;
  cardTitle: string = 'Ici un composant'; // j'ai pas pu resister
  /** !: depuis ANGULER V10 la variable doit être affecté
   * depuis la déclaration
   * dans le constructeur
   */
  saisieTwoWay: string = "valeur par défaut";
  constructor() {

  }

  ngOnInit(): void {
    this.saisieTwoWay = this.nom;
    console.log('monPrenom is ', this.monPrenom);

  }

  mclique(valeurSaisie: string) {

    this.unChamp = valeurSaisie;
    this.chgPrenom.emit(this.unChamp);
    console.log('click reçue : ', valeurSaisie);

  }

}
