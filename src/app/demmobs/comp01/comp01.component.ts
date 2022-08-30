import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServiceaService } from '../servicea.service';

@Component({
  selector: 'tc-comp01',
  templateUrl: './comp01.component.html',
  styleUrls: ['./comp01.component.scss']
})
export class Comp01Component implements OnInit, OnDestroy {
  /**
   * on doit avoir une proprièté globale à la classe
   * de subscription pour
   * faire récupérer le subscribe d'un Observable
   * et aussi de se désabonner.
   */
  actionSub !: Subscription;

  constructor(private srvA: ServiceaService, private route: Router) {
    // on récupére la subsrciption
    this.actionSub = this.srvA.actionObs.subscribe(
      data => console.log(data)
    );
    /**
     * le service est un singleton, c'est le dernier subscribe qui a raison
     * on le fait dans le comp 02
     * On empile les souscriptions
     *
     */
  }

  /**
   * désabonnenemt pour libération des resources
   */
  ngOnDestroy(): void {
    // on se déabonnes
    if (!this.actionSub.closed) {
      // mais seulement si un autre compposant ne l'a pas déja faitre
      this.actionSub.unsubscribe();
    }
  }

  ngOnInit(): void {
  }
  lorsDUnEvenement(valeur: string) {
    this.srvA.faitUneAction(valeur);
    /**
     * on vas changer de route par la méthode navigate
     */
    // this.route.navigate(['/posts']);
    this.route.navigate(['/posts', { postId: 40 }]);

  }

}
