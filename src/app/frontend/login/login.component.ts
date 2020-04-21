import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from './../../auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  blogForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router, private authservice: AuthService, private toastr: ToastrService) { }

  get fBlog() { return this.blogForm.controls; }

  ngOnInit() {
    this.blogForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.authservice.logout();
  }

  onSubmit () {
    this.submitted = true;
    // this.toastr.clear();
    if (this.blogForm.invalid) {
      return;
    }

    const formData = new FormData();
    formData.append('email', this.blogForm.get('email').value);
    formData.append('password', this.blogForm.get('password').value);
    this.authservice.login(formData).subscribe(res => {
        if(this.authservice.isLoggedIn()){
          this.toastr.success(res.message, 'Success!');
          const redirect = this.authservice.redirectUrl ? this.authservice.redirectUrl : '/home';
          this.router.navigate([redirect]);
        }else{
          this.toastr.warning(res.message, 'Error!');
        }
    });
  }

}
