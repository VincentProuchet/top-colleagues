import { Component, OnInit } from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'tc-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  nom !: string;
  prenom!: string;
  adresse !: string;
  tabPersonnes: Array<Personne> = new Array();



  constructor() {
  }

  ngOnInit(): void {
    this.nom = "";
    this.prenom = "";
    this.adresse = "";
  }

  ajouter(): void {
    if (this.testValue(this.nom)
      && this.testValue(this.prenom)
      && this.testValue(this.adresse)) {
      this.tabPersonnes.push(new Personne(this.nom, this.prenom, this.adresse));
      console.log(this.tabPersonnes);

    }
    console.log("les valeurs du tableau sont vides ou incohérentes");

  }
  testValue(value: string): boolean {
    if (value != "" && value.length > 3) {
      return true;
    }
    return false;

  }

}


