import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
// import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // serverUrl : string;
  headerForm: FormGroup;
  constructor(public router: Router,private fb: FormBuilder) { }

  ngOnInit() {
    // this.serverUrl = environment.baseUrl;

    this.headerForm = this.fb.group({
      search: ['', Validators.required]
    });
  }

}
