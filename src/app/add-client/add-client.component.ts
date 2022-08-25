import { Component, OnInit } from '@angular/core';
import { Personne } from '../models/personne';

@Component({
  selector: 'tc-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  /**
   *
   nom !: string;
   prenom!: string;
   adresse !: string;
   */
  personne!: Personne;
  tabPersonnes: Array<Personne> = new Array();
  static ERROR_NEW_CLIENT_TEXT: string = "les valeurs du tableau sont vides ou incohérentes";


  constructor() {
  }

  ngOnInit(): void {
    this.personne = new Personne("", "", "");

  }

  ajouter(): void {
    if (this.testValue(this.personne.nom)
      && this.testValue(this.personne.prenom)
      && this.testValue(this.personne.adresse)) {
      // va créer un probléme de références
      // tous les élements du tableau seraient des clone du même objet
      //this.tabPersonnes.push(this.personne);
      // celui-ci pousse une copie de l'objet courant
      // au lieu de passer la référence l'objet
      this.tabPersonnes.push({ ...this.personne });
      // évite de devoir faire ça
      /**
       * à la vieille école
       this.tabPersonnes.push(new Personne(
         this.personne.nom
         , this.personne.prenom
         , this.personne.adresse));

         */

      //console.log(this.tabPersonnes);
    }
    console.log(AddClientComponent.ERROR_NEW_CLIENT_TEXT);

  }
  testValue(value: string): boolean {
    if (value != "" && value.length > 3) {
      return true;
    }
    return false;

  }

}


