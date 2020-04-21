import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AdminService } from '../admin.service';
import { environment } from './../../../environments/environment';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-manage-works',
  templateUrl: './manage-works.component.html',
  providers: [NgbModalConfig, NgbModal],
  styleUrls: ['./manage-works.component.css']
})
export class ManageWorksComponent implements OnInit {

  selectedFile: File;
  blogForm: FormGroup;
  submitted = false;
  base_url = environment.baseUrl;
  workData: workPage;
  theCheckbox = false;
  marked = false;
  error: {};

  constructor(private fb: FormBuilder, private myService: AdminService,config: NgbModalConfig, private modalService: NgbModal, private toastr: ToastrService) {
    // config.backdrop = 'static';
    // config.keyboard = false;
  }

  get fBlog() { return this.blogForm.controls; }

  ngOnInit() {
    this.blogForm = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      image: [''],
      description: ['', Validators.required]
    });

    this.myService.getWorks().subscribe(
      (data: workPage) => this.workData = data,
      error => this.error = error
    );
  }

  toggleVisibility(values:any,$id){
    var setData = {
          id: $id,
          status: (values.currentTarget.checked == true) ? '1':'0'
    }
    this.myService.update_work_status(setData).subscribe(res => {
            console.log(res);
    });
  }

  onDelete(id: number)
  {
    var setData = {
              id: id
            }
    if (confirm('Are you sure want to delete')) {
      this.myService.delete_work_status(setData).subscribe(res => {
          this.ngOnInit();
      });
    }
  }

  onFileChanged(event){
    this.selectedFile = event.target.files[0]
  }

  onSubmit(){
    this.submitted = true;
    if (this.blogForm.invalid) {
      return;
    }
    const formData = new FormData();
    formData.append('id', this.blogForm.get('id').value);
    formData.append('title', this.blogForm.get('title').value);
    if(this.selectedFile){
      formData.append('image', this.selectedFile);
    }
    formData.append('description', this.blogForm.get('description').value);
    this.myService.update_image(formData).subscribe(res => {
        this.modalService.dismissAll();
        this.toastr.success(res, 'Success!');
    });
  }

  onEdit(id: number,content) {
    if (id != 0) {
      this.myService.get_work_from_id(id).subscribe(res => {
        this.blogForm.patchValue({
          id: res.id,
          title: res.title,
          // image: res.image,
          description: res.description
        });
      });
    }else {
      this.blogForm.patchValue({
        id: '',
        title: '',
        image: '',
        description: ''
      });
    }
    this.modalService.open(content, {
      size: 'lg'
    });
  }

}


interface workPage {
  id: string;
  title: string;
  image: string;
  description: string;
  is_active: string;
}
