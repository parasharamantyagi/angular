import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  manage_active_com: string;
  manage_show_com: string;
  active_com: string;
  router_value = ['/admin/work', '/admin/service', '/admin/comment', '/admin/home'];

  constructor(public router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.active_com = this.route.snapshot['_routerState'].url;
    // console.log(this.router_value);
    if(this.router_value.indexOf(this.active_com) !== -1) {
      this.manage_active_com = "active";
      this.manage_show_com = "show";
    }else{
        this.manage_active_com = "collapsed";
        this.manage_show_com = "";
      }
  }

}
