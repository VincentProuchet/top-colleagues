import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'tc-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {


  postTab !: Post[];
  /** pour l'exemple des routes avec arguments */
  private postIdParamName: string = 'postId'
  public postId: number = 0;
  /**
   *
   * @param postsrv On récupére l'injection de PostService
   */
  constructor(private postsrv: PostService, private route: ActivatedRoute) {
    this.postId = parseInt(route.snapshot.paramMap.get(this.postIdParamName) || '0');

  }
  ngOnDestroy(): void {
    console.log('Composant détruit');
  }

  ngOnInit(): void {
    this.postsrv.findAll().subscribe(
      {
        next: (data) => { this.postTab = data },
        error: (error) => { console.error(error) },
        complete: () => { console.log("finaly") }
      }
    )
      ;
  }
  add() {
    this.postsrv.add(
      {
        body: "corpus",
        id: 0,
        title: "essai 01",
        userId: 1
      }
    ).subscribe(
      {
        next: data => { this.postTab.push(data) },
        error: error => console.log(error),
        complete: () => console.log("finally")
      }
    );
  }

}
