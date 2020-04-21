import { Component, OnInit } from '@angular/core';
import { FrontendService } from '../frontend.service';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  base_url = environment.baseUrl;
  serviceData: ServicePage;
  error: {};

  constructor(private myService: FrontendService) { }

  ngOnInit() {
    this.myService.getService().subscribe(
      (data: ServicePage) => this.serviceData = data,
      error => this.error = error
    );
  }

}

interface ServicePage {
  id: string;
  title: string;
  image: string;
  description: string;
}
