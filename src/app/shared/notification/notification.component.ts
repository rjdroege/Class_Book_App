import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookshelfService } from 'src/app/bookshelf/bookshelf.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  alertSub: Subscription;

  constructor(private bookshelfService: BookshelfService) { }

  ngOnInit(): void {
   this.alertSub = this.bookshelfService.bookSelected.subscribe(data=>{
      console.log(data);
      alert(`title: ${data.title}\n author: ${data.author}`)
    });
  }

  ngOnDestroy() {
    this.alertSub.unsubscribe();
  }

}
