import { Component } from '@angular/core';

@Component({
  selector: 'tc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'top-colleagues';
  prenom: string = "robert";

  callChgPr(prenom: string) {
    alert(prenom);
    this.prenom = prenom;
  }
}
