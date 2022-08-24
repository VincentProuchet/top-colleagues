import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tc-collegues',
  template: `
    <h1>Ici un template</h1>

    <!-- [] => biding de propriété  -->
    <img [src]="uneImage" alt="Une Image par binding">
    <!--  *=> directive de structure d'angular -->
    <p **ngIf="unChamp">
      <!--{{}}=> interpolation : affichage d'une variable, du retour d'une fonction ... -->
      {{unChamp}}
      <!-- Pipe  => permet de transformer l'affichage de la donnée -->
      {{unChamp|uppercase}}
    </p>

  `,
  // templateUrl: './collegues.component.html',
  styleUrls: ['./collegues.component.scss']
})
export class ColleguesComponent implements OnInit {

  uneImage = "/assets/logo.jpg";
  unChamp = "Je suis un champ ts"

  constructor() { }

  ngOnInit(): void {
  }

}
