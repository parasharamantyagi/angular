import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.css']
})
export class FrontendComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {

    this.loadStyle('./../../../assets/frontend-theme/css/styles.css');
    this.loadStyle('./../../../assets/frontend-theme/css/carousel.css');

    this.loadScript('./../../../assets/frontend-theme/js/jquery-1.9.1.js');
    // this.loadScript('./../../../assets/frontend-theme/js/jquery-ui.js');
    this.loadScript('./../../../assets/frontend-theme/js/carouselScript.js');
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
