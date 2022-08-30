import { Routes } from "@angular/router";
import { Comp01Component } from "../demmobs/comp01/comp01.component";
import { Comp02Component } from "../demmobs/comp02/comp02.component";
import { PostComponent } from "../demohttp/post/post.component";
import { WelcomePage } from "../pages/welcome/welcome.page";

/**
 * On a importé RouterModule
 * dans le module princupal app.module.ts
 *
 * path:'' c'est accés au path en faisant
 * http://localhost:4200
 */
export const ROUTES: Routes = [
  {
    path: '', component: PostComponent

  },
  {
    path: 'comp01', component: Comp01Component

  },
  {
    path: 'welcome', component: WelcomePage
  }
];
