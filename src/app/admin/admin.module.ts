import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule  } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AdminRoutingModule } from './admin-routing.module';

import { HeaderComponent } from './include/header/header.component';
import { FooterComponent } from './include/footer/footer.component';
import { SidebarComponent } from './include/sidebar/sidebar.component';

import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageHomeComponent } from './manage-home/manage-home.component';
import { ManageCommentsComponent } from './manage-comments/manage-comments.component';
import { ManageServiceComponent } from './manage-service/manage-service.component';
import { ManageWorksComponent } from './manage-works/manage-works.component';


@NgModule({
  declarations: [HeaderComponent, AdminComponent, AdminDashboardComponent, FooterComponent, SidebarComponent, ManageHomeComponent, ManageCommentsComponent, ManageServiceComponent, ManageWorksComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    AdminRoutingModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      preventDuplicates: true,
    })
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    AdminComponent,
    AdminDashboardComponent,
    FooterComponent
  ]
})
export class AdminModule { }
