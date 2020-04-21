import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  blogForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  get fBlog() { return this.blogForm.controls; }

  ngOnInit() {
    this.blogForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      feedback: ['', Validators.required]
    });
  }

  onSubmit () {
    this.submitted = true;
    if (this.blogForm.invalid) {
      return;
    }
      console.log('sssssssssssss');
  }

}
