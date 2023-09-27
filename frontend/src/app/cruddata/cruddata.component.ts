import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cruddata',
  templateUrl: './cruddata.component.html',
  styleUrls: ['./cruddata.component.scss']
})
export class CruddataComponent implements OnInit {
  constructor(private service: MyserviceService) { 
  }


  myid: any;
  record: any;
  singledata: any;
  getdatas:any;

  ngOnInit(): void {
    // this.myid = this.rout.snapshot.paramMap.get('id');
    // console.log(this.myid);
    // this.mysingledata();
    
    this.mymongodbgetalldata();
  }

  mydeletrecord(id:any): void {
    // this.mycurid=this.myrout.snapshot.paramMap.get('id');
    // console.log(this.mycurid);
    this.service.mydelete(id).subscribe(() => {
      console.log(id);
      alert("data is deleted");
      this.mymongodbgetalldata();
    })
    
  };
  
  mymongodbgetalldata(): void {
    this.service.getmyalldata().subscribe((d) => {
      this.getdatas=d;
      console.log(this.getdatas);
    })
  }
}
