import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class BaseComponentService {

  constructor(public router: Router,
              public formBuilder: FormBuilder,
              public toastr: ToastrService) { }
}
