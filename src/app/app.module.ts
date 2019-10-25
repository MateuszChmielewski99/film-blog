import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatButtonToggleModule, MatSelectModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { MainNavComponent } from './components/layout/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PostComponent } from './components/post/post.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { CommentsComponent } from './components/comment/comments/comments.component';
import {HttpClientModule} from '@angular/common/http';
import { SingleCommentComponent } from './components/comment/single-comment/single-comment.component';
import { CommentInputComponent } from './components/comment/comment-input/comment-input.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    PostComponent,
    PostItemComponent,
    FooterComponent,
    SinglePostComponent,
    CommentsComponent,
    SingleCommentComponent,
    CommentInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatButtonModule, LayoutModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule
    ,MatCardModule,MatButtonToggleModule,HttpClientModule,MatSelectModule,FormsModule,MatFormFieldModule,MatInputModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
