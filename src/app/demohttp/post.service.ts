import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';
const HTTPOPTIONS = {
  headers: new HttpHeaders(
    {
      "Content-Type": "application/json"
    }
  )
}
@Injectable({
  providedIn: 'root'
})
export class PostService {

  static APIRESTURI: string = 'https://jsonplaceholder.typicode.com/posts';
  /**
   * On dépend du BACKEND
   * la BDD est gérée par le BACKEND
   * le FRONT est un utilisateur,
   * des services qu'on lui met à sa disposition
   * avec la DOC !!!!!
   * on passe en grande majorité par des services API REST
   * @param http
   */
  constructor(private http: HttpClient) { }

  findAll(): Observable<Post[]> {
    return this.http.get<Post[]>(PostService.APIRESTURI);

  }
  add(post: Post): Observable<Post> {
    return this.http.post<Post>(PostService.APIRESTURI, post, HTTPOPTIONS);
  }

}
