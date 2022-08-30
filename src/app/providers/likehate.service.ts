import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikehateService {

  private _mySubHate: Subject<number> = new Subject();
  private _mySubLike: Subject<number> = new Subject();

  get subHate() {
    return this._mySubHate.asObservable();
  }
  get subLike() {
    return this._mySubLike.asObservable();
  }
  nextHate(cpt: number) {
    this._mySubHate.next(cpt);
  }
  nextLike(cpt: number) {
    this._mySubLike.next(cpt);
  }
}
