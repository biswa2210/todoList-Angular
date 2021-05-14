import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo List';
  constructor() {
   /*     setTimeout(() => {
      this.title="In Progress"
        }, 2000);
     setTimeout(() => {
      this.title="Biswa Will Create This Web App"
    }, 4000);*/
  };
}
