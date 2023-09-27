import { Component,OnInit } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
constructor(private service:MyserviceService,private rout:ActivatedRoute){}
ngOnInit(): void {
  this.mysingledata;
  this.myid =this.rout.snapshot.paramMap.get('id');
  console.log(this.myid);
  this.mysingledata();
}

record:any;
myid:any;

//view work
mysingledata():void{
 this.service.singledata(this.myid).subscribe((x)=>{
    this.record = x;
    console.log(this.record);
  })
   

}

}
