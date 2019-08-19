import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm:FormGroup;
  name:string = 'Jon Doe';
  email:string = 'jon@requantive.com';
  isSubmit:boolean = false;

  constructor(private formBulider:FormBuilder,private route:Router) { }

  ngOnInit() {
    localStorage.removeItem('signup-data');
    this.reactivFormValidation();
  }

  reactivFormValidation(){
    this.signupForm = this.formBulider.group({
        nameFC:[{value:this.name, disabled:true},[Validators.required]],
        emailFC:[{value:this.email, disabled:true},[Validators.required]],
        passFC:['',[Validators.required]]
    });
}

get f() { return this.signupForm.controls; }

public onSubmit(){
  this.isSubmit = true;

  if(this.signupForm.valid) {

      let obj = {
        name:this.f.nameFC.value,
        email:this.f.emailFC.value,
        password:this.f.passFC.value
      }

      localStorage.setItem('signup-data',JSON.stringify(obj));

      this.route.navigate(['success']);
  } 
}

}
