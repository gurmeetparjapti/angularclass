import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators} from '@angular/forms';
import { MyserviceService } from '../service/myservice.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  submitted = false;
  constructor(
    private abc: FormBuilder, 
    private abc1: FormBuilder,
    public myser: MyserviceService,
    private subscribe:FormBuilder) { }
  myarry: any;

  ngOnInit(): void {
    // this.mymongodbgetalldata()
  //  this. subcribepagesubmit()
  }
  mybulder = this.abc.group({
    username: new FormControl(),
    email: new FormControl(),
    age: new FormControl(),
    phone: new FormControl(),
    password: new FormControl()
  })
  abc4: any;
  mysubmit(): void {
    console.log(this.mybulder.value);
  // localStorage.setItem("mykey",JSON.stringify(this.mybulder.value));
    this.myser.insertrecord(this.mybulder.value).subscribe((d) =>{
      // console.log(d);
    })
    this.mybulder.reset();
  }
  //==========================  sign up form end==========================
  //=============================login form ts start --=======================================

  mybulderform = this.abc1.group({

    email1: new FormControl(),
    password1: new FormControl(),
  })
  mygetdata: any;
  mysubmit1() {

    localStorage.setItem("mykey1", JSON.stringify(this.mybulderform.value));
    // console.log(this.mybulderform.value);
    this.mybulderform.reset();
  }
  //=====================================login form ts end --=======================================
//subscription page

subscribepage = this.subscribe.group({

  subscribesection: new FormControl('',[Validators.required,Validators.email])
})



subcribepagesubmit(){ 
       console.log(this.subscribepage.value);
      this.subscribepage.reset();

}






















  //databind-==getdata

  // getdataformlocal()
  // {
  //   this.mygetdata = JSON.parse(localStorage.getItem("mykey1") || '{}');
  //   console.log(this.mygetdata);

  // }

}
