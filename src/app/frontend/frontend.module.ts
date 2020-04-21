import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { ReactiveFormsModule  } from '@angular/forms';

import { FrontendRoutingModule } from './frontend-routing.module';
import { HeaderComponent } from './include/header/header.component';
import { FooterComponent } from './include/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FrontendComponent } from './frontend/frontend.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, HomeComponent, FrontendComponent, AboutComponent, ServicesComponent, WorkComponent, ContactComponent, LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FrontendRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      preventDuplicates: true,
    })
  ],exports: [
    HeaderComponent,
    FooterComponent,
    FrontendComponent,
    HomeComponent
  ]
})
export class FrontendModule { }
