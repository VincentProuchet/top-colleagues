import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceaService {

  // création d'une instance de Subject
  // le subject est privé, seul le service ServiceA peut émettre une valeur
  // <string> désigne la nature de la donnée à notifier

  private action = new Subject<string>();
  // création d'une propriété publique
  // accessible en dehors du service
  // seule l'interface Observable du Subject est exposée


  constructor() {

    console.log('ServiceA is running');
  }

  get actionObs() {
    return this.action.asObservable();
  }

  faitUneAction(data: string) {
    // exécution de l'action
    // notification de tous les observateurs avec la donnée courante
    this.action.next(data);
  }

  unsubscribe() {
    if (!this.action.closed) this.action.complete()
  }

}
