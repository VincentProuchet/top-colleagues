import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LikehateService } from 'src/app/providers/likehate.service';

@Component({
  selector: 'tc-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnDestroy {
  /**
   * affichage des deux compteurs
   */
  cptLike: number = 0;
  cptHate: number = 0;

  private _hateSub !: Subscription;
  private _likeSub !: Subscription;


  constructor(private servLH: LikehateService) {
    this._hateSub = this.servLH.subHate.subscribe(
      (cpt) => this.cptHate = cpt
    )
    this._likeSub = this.servLH.subLike.subscribe(
      (cpt) => this.cptLike = cpt
    )
  }
  ngOnDestroy(): void {
    this._hateSub.unsubscribe();
    this._likeSub.unsubscribe();
  }

  ngOnInit(): void {
  }

}
