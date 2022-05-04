import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HTTPService } from '../http/http.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {
  collapsed: boolean = true;
  show: boolean = false;
  isAuthenticated: boolean = false;

  constructor(private httpService: HTTPService, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe((user) => {
      this.isAuthenticated = !!user;
    })
  }

  onSaveData(){
    this.httpService.saveBooksToFirebase();
  }

  onFetchData(){
    this.httpService.fetchBooksFromFirebase();
  }

  onSignOut(){
    this.authService.signOut();
  }

  ngOnDestroy(): void {
      this.authService.currentUser.unsubscribe();
  }


}
