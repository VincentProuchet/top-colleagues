import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LikeHate } from 'src/app/models/like-hate';

@Component({
  selector: 'tc-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss']
})
export class LikeHateComponent implements OnInit {
  @Input()
  score: number = 0;
  @Output()
  choix: EventEmitter<LikeHate> = new EventEmitter<LikeHate>();
  like: LikeHate = LikeHate.LIKE;
  hate: LikeHate = LikeHate.HATE;

  constructor() { }

  ngOnInit(): void {
  }
  choice(choix: LikeHate): void {
    this.choix.emit(choix);
  }

}
