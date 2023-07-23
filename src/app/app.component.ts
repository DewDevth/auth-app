import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {
  title = 'auth-app';
  ismenurequired = false
  constructor(private router: Router) {

  }

  //แสดง navbar ตอน loginเเล้ว
  ngDoCheck(): void {
    let currenturl = this.router.url;
    if (currenturl == '/login' || currenturl == '/register') {
      this.ismenurequired = false
    } else {
      this.ismenurequired = true
    }
  }
}
