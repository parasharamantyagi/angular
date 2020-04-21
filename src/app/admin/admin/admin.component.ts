import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    this.loadStyle('./../../../assets/admin-theme/css/styles.css');
    this.loadStyle('https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap4.min.css');
    this.loadScript('./../../../assets/admin-theme/js/font-awesome-all.min.js');
    this.loadScript('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js');
    this.loadScript('https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js');
    this.loadScript('https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js');
    this.loadScript('./../../../assets/admin-theme/js/scripts.js');
  }

  public loadStyle(inputFile) {
    let body = <HTMLDivElement> document.body;
    let link = document.createElement('link');
    link.href = inputFile;
    link.rel = "stylesheet";
    body.appendChild(link);
  }

  public loadScript(inputFile) {
    let body = <HTMLDivElement> document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = inputFile;
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }

}



