import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { environment } from './../../../environments/environment';


@Component({
  selector: 'app-manage-service',
  templateUrl: './manage-service.component.html',
  styleUrls: ['./manage-service.component.css']
})
export class ManageServiceComponent implements OnInit {

  serviceData: servicePage;
  base_url = environment.baseUrl;
  error: {};

  constructor(private myService: AdminService) { }

  ngOnInit() {
    this.myService.getService().subscribe(
      (data: servicePage) => this.serviceData = data,
        error => this.error = error
    );
  }

  onDelete(id: number)
  {
        console.log(id);
  }

}


interface servicePage {
  id: string;
  title: string;
  image: string;
  description: string;
  is_active: string;
}
