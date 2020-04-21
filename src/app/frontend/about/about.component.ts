import { Component, OnInit } from '@angular/core';
import { FrontendService } from '../frontend.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutData: PageUs;
  error: {};
  constructor(private myService: FrontendService) { }

  ngOnInit() {
    this.myService.getPage('about').subscribe(
      (data: PageUs) => this.aboutData = data,
      error => this.error = error
    );
  }

}

interface PageUs {
  id: string;
  title: string;
  description: string;
}
