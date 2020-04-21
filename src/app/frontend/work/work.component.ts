import { Component, OnInit } from '@angular/core';
import { FrontendService } from '../frontend.service';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  base_url = environment.baseUrl;
  workData: workPage;
  error: {};

  constructor(private myService: FrontendService) { }

  ngOnInit() {
    this.myService.getWorks().subscribe(
      (data: workPage) => this.workData = data,
      error => this.error = error
    );
  }

}

interface workPage {
  id: string;
  title: string;
  image: string;
  description: string;
}
