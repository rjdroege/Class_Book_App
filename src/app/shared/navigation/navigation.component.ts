import { Component, OnInit } from '@angular/core';
import { HTTPService } from '../http/http.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  collapsed: boolean = true;
  show: boolean = false;

  constructor(private httpService: HTTPService) { }

  ngOnInit(): void {
  }

  onSaveData(){
    this.httpService.saveBooksToFirebase();
  }

  onFetchData(){
    this.httpService.fetchBooksFromFirebase();
  }



}
