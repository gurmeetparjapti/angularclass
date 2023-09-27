import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormControl } from '@angular/forms';
import { MyserviceService } from '../service/myservice.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-updatedata',
  templateUrl: './updatedata.component.html',
  styleUrls: ['./updatedata.component.scss']
})
export class UpdatedataComponent implements OnInit{
constructor(private abc: FormBuilder, private sevice:MyserviceService,private route:ActivatedRoute){}
mydata:any;
myid:any;
abcd:String="text";
  ngOnInit(): void {
    this.myid = this.route.snapshot.paramMap.get('id');
   this.myupdate;
   this.singleuserdata();
  }
  mybulder = this.abc.group({
    username: new FormControl(),
    email: new FormControl(),
    age: new FormControl(),
    phone: new FormControl(),
    password: new FormControl()
  })
  myupdate():void{
    // console.log(this.myform.value);
    this.sevice.updatedata(this.mybulder.value,this.myid).subscribe((u)=>{
      console.log(u);
      window.location.href="http://localhost:4200/crud";
    })
  }
  singleuserdata():void{
    this.sevice.singleuser(this.myid).subscribe((sd)=>{
      console.log(sd);
      this.mydata=sd;
      this.mybulder.patchValue({
        username:this.mydata[0].username,
        email:this.mydata[0].email,
        age:this.mydata[0].age,
        phone:this.mydata[0].phone,
        password:this.mydata[0].password,
      })
      
    })
}

// visible:boolean=true;
// Changetype:boolean=true;
// viewpass(){
//   this.visible=!this.visible
//   this.Changetype=!this.Changetype
// }


}
