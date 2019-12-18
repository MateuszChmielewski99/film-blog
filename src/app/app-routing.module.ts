import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './components/post-components/post/post.component';
import { SinglePostComponent } from './components/post-components/single-post/single-post.component';


import { RegisterPageComponent } from './components/register-page/register-page.component';
import { PostFormComponent } from './components/add-post-panel/post-form/post-form.component';
import { SigninComponent } from './components/signin/signin.component';


const routes: Routes = [
  {
    path: '',
    component: PostComponent
  },
  {
    path:'posts/add',
    component:PostFormComponent
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
    path:'signin',
    component:SigninComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
