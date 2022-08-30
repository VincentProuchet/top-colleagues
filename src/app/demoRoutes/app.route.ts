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
    path: 'posts', component: PostComponent

  },
  {
    /**ici postId est le nom de la variable */
    path: 'posts/:postId', component: PostComponent

  },
  {
    path: 'comp01', component: Comp01Component

  },
  {
    path: 'welcome', component: WelcomePage
  },
  {
    // redirige vers une route pâr défaut (démarrage de l'application)
    path: '', redirectTo: '/posts', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '/posts'
    /**
     * ce bloc vient en dernier
     * redirigeras tous ce qui ne se trouve pas au-dessus
     * vers la route redirectTo
     * on le gére pour la notion de 404
     *
     */

  }
  /*{
  path:'pizzas/:pizzaId',
  component:PizzaDetailComponent,
  children:[
    {path:'',pathMatch:'full',redirectTo:'caracteristiques'},
    {path:'avis',component:AvisPizzaComponent},
    {path:'caracteristiques',component:CaracteristiquesComponent}
  ]
}
->> :pizzaId : c'est pathvariable ->une variable à récupérer dans le composant
en récupérant l'url ..
 *pizzas/10 => pizzas/10/caracteristiques
 *pizzas/10/avis
 *pizzas/10/caracteristiques
 *Dans tous les cas, je passe par le composant :
             component:PizzaDetailComponent
 */


];
