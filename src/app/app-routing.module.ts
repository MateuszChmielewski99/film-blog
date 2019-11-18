import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './components/post-components/post/post.component';
import { SinglePostComponent } from './components/post-components/single-post/single-post.component';
import { BlackjackComponent } from './components/game/blackjack/blackjack.component';

import { RegisterPageComponent } from './components/register-page/register-page.component';


const routes: Routes = [
  {
    path: '',
    component: PostComponent
  },
  {
    path: 'posts/:id',
    component: SinglePostComponent
  },
  {
    path:'register',
    component: RegisterPageComponent
  },
  {
    path:'game',
    component: BlackjackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
