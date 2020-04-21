import { Component, OnInit } from '@angular/core';
import { FrontendService } from '../frontend.service';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  base_url = environment.baseUrl;
  homeData: HomePage;
  error: {};

  constructor(private myService: FrontendService) { }

  ngOnInit() {
    this.myService.getHome().subscribe(
      (data: HomePage) => this.homeData = data,
      error => this.error = error
    );
  }

}

interface HomePage {
  id: string;
  title: string;
  image: string;
  description: string;
}
