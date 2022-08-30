import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'tc-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {


  postTab !: Post[];
  /**
   *
   * @param postsrv On récupére l'injection de PostService
   */
  constructor(private postsrv: PostService) { }

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
