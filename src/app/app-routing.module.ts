import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './components/post-components/post/post.component';
import { SinglePostComponent } from './components/post-components/single-post/single-post.component';


import { RegisterPageComponent } from './components/register-page/register-page.component';
import { PostFormComponent } from './components/add-post-panel/post-form/post-form.component';
import { SigninComponent } from './components/signin/signin.component';
import { DashboardPageComponent } from './components/dashboard/dashboard-page/dashboard-page.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: PostComponent
  },
  {
    path:'posts/add',
    component:PostFormComponent,
    canActivate:[AuthGuard]
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
  },
  {
    path:'dashboard',
    component:DashboardPageComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
