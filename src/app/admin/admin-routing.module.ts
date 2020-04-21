import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageHomeComponent } from './manage-home/manage-home.component';
import { ManageCommentsComponent } from './manage-comments/manage-comments.component';
import { ManageServiceComponent } from './manage-service/manage-service.component';
import { ManageWorksComponent } from './manage-works/manage-works.component';

import { AuthGuard } from './../auth/auth.guard';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'dashboard',component: AdminDashboardComponent},
      {path: 'home',component: ManageHomeComponent},
      {path: 'comment',component: ManageCommentsComponent},
      {path: 'service',component: ManageServiceComponent},
      {path: 'work',component: ManageWorksComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
