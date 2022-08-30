import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServiceaService } from '../servicea.service';

@Component({
  selector: 'tc-comp02',
  templateUrl: './comp02.component.html',
  styleUrls: ['./comp02.component.scss']
})
export class Comp02Component implements OnInit, OnDestroy {
  /**
    * on doit avoir une proprièté globale à la classe
    * de subscription pour
    * faire récupérer le subscribe d'un Observable
    * et aussi de se désabonner.
    */
  actionSub !: Subscription;
  dataHtml: string = "";

  constructor(private srvA: ServiceaService) {
    // on récupére la subsrciption
    this.actionSub = this.srvA.actionObs.subscribe(
      {
        next: (data: string) => {
          this.dataHtml = data;
        },
        error: (error: string) => {
          console.error(error);

        },
        complete: () => {
          //Fin
        }

      });
  }

  /**
   * désabonnenemt pour libération des resources
   */
  ngOnDestroy(): void {
    // on se déabonnes
    if (!this.actionSub.closed) {
      this.actionSub.unsubscribe();
    }
  }

  ngOnInit(): void {
  }

}
