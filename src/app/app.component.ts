import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'WebsiteUI';
  ngOnInit() {
    AOS.init(
      {
        offset: 200,
        duration: 1700,
        easing: 'ease-in-sine',
        delay: 800,
      }
    );
  }
}
