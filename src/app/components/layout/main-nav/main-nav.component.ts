import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CategoriesService } from 'src/app/services/categories.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit{
  categories:string[];
  isLogged:boolean;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private categoriesService:CategoriesService, private authService:AuthService) {}
  
  ngOnInit(){
    this.categoriesService.getAll().subscribe(s => this.categories = s);
    this.authService.currentUserSubject.subscribe(s => this.isLogged = !!s);
  }

  logOut(){
    this.authService.logout();
  }
}
