import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, interval, Observable, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'tc-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss']
})
export class WelcomePage implements OnInit {
  /**qui gére les votes
   * qui fait les votes et connait les votes et les colleagues
   * <tc-colleague></tc-colleague>
   *
   * <tc-colleague-list>
   * Le récupére la liste des colleagues et il affiche
   * avec le composant :<tc-colleague></tc-colleague>
   * On ajoute un @output dans <tc-colleague></tc-colleague>
   *
   * on crée une callback dans </tc-colleague-list>
   * et il faut aussi que <tc-colleague></tc-colleague> passe l'info au parent
   * <tc-welcomepage>
   *
   * Ajouter une @input de type Array<Vote> dans </tc-colleague>
   *
   * qui affiche et supprime les historiques de votes
   * <tc-voting-history>
   */
  //listColleague: Colleague[] = new Array<Colleague>();
  //listVotes: Vote[] = new Array<Vote>();
  /**une image par défault */
  static DEFAULT_IMG = "./assets/logo.jpg";
  constructor() { }

  ngOnInit(): void {
    this.useObservable();
    // this.useSubject();
    // this.useSubject02();
    this.useSubject03();
    /**
    this.listColleague.push({ pseudo: "Ben_dOver", score: 10, photo: WelcomePage.DEFAULT_IMG });
    this.listColleague.push({ pseudo: "Mike_Hunt", score: 7, photo: WelcomePage.DEFAULT_IMG });
    this.listColleague.push({ pseudo: "Mie_Dickhearts", score: 25, photo: WelcomePage.DEFAULT_IMG });
    this.listColleague.push({ pseudo: "Dick_Bicks", score: 30, photo: WelcomePage.DEFAULT_IMG });
    this.listColleague.push({ pseudo: "Vulgar", score: -999, photo: WelcomePage.DEFAULT_IMG });
    this.listColleague.push({ pseudo: "Wisely", score: 999, photo: WelcomePage.DEFAULT_IMG });
     *
     this.listVotes.push({
       colleague: { pseudo: "Ben-dOver", score: 10, photo: WelcomePage.DEFAULT_IMG },
          vote: LikeHate.LIKE
        });
        this.listVotes.push({
          colleague: { pseudo: "Vulgar", score: -999, photo: WelcomePage.DEFAULT_IMG },
          vote: LikeHate.HATE
        });
        this.listVotes.push({
          colleague: { pseudo: "M_Dickhearts", score: 10, photo: WelcomePage.DEFAULT_IMG },
          vote: LikeHate.LIKE
        });
        */

  }
  useObservable() {
    let myObservable = new Observable(observer => {
      setTimeout(() => observer.next('Prouchet'), 6000);
      setTimeout(() => observer.next('ho ! noooo!'), 1000);
      setTimeout(() => observer.next('Vincent'), 2000);
      setTimeout(() => observer.complete(), 9000);
    });
    myObservable.subscribe(
      {
        next: value => console.log(value),
        error: error => console.error(error),
        complete: () => console.log('terminée')
      }
    );
    // on ne peux pas faire de complete(désabonnement)
    // directement sur un observable

  }
  /**
   * attention, ici il n'y a pas d'arrêt
   * le programme va continuer à compter jusqu'à la fermeture de la page
   */
  useSubject() {
    let myTimer = interval(1000); // on créer un timer de XXXX secondes
    let mySubject = new Subject();
    myTimer.subscribe(mySubject);// le timer va executer // next :  du subject chaque XXXX secondes

    mySubject.subscribe(value => console.log(value));// next :
    mySubject.next(0);
    mySubject.next("mot");


  }
  /**
   *
   */
  useSubject01() {

    let mySubject = new Subject();
    mySubject.next("mot 02");
    mySubject.next("mot 03");
    /**
     * les deux précédent next ne font rien et ne sont pas stocker
     * car nous n'avons pas spécifié d'abonnement
     * le subscribe(...)
     *
    */
    mySubject.subscribe(value => console.log(value));// next :
    mySubject.next("mot affiché");
    mySubject.complete();


  }
  /**
   * exemple de ReplaySubject
   *
   * On a en résultat dans la console :
   * Mot2
    * Mot3
    * Mot affiché
    */
  useSubject02() {

    let mySubject = new ReplaySubject();
    mySubject.next("Mot2");
    mySubject.next("Mot3");
    /**
     * les deux précédent sont historisé
     * c'est le principe/rôle du ReplaySubject()
     *
    */
    mySubject.subscribe(value => console.log(value));// next :
    mySubject.next("Mot affiché");
    mySubject.complete();
    // Il faut absolument faire un complete sur un observable pour en libérer les resources


  }
  useSubject03() {

    let mySubject = new BehaviorSubject<number>(0);
    /**
     * il garde la dernière valeur
     * on s'en sert pour savoir qui est connecté ou récupérer le token en cour...
     * dans une service
     */
    mySubject.next(1);
    mySubject.next(2);
    mySubject.subscribe(value => console.log(value));// next :
    mySubject.next(4);
    mySubject.complete();
    // Il faut absolument faire un complete sur un observable pour en libérer les resources


  }

}
