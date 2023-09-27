import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable, catchError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  [x: string]: any;
  url = "http://localhost:8080";
  httpClient: any;
  ids: any;
  constructor(public http: HttpClient, public routs: ActivatedRoute) { }

  insertrecord(data:any): Observable<any> {
    return this.http.post(this.url+ "/create",data);
  }
  
  getmyalldata() {
    return this.http.get(this.url+"/getdata");
  }
  // mydata() {
  //   return this.http.get(this.url);
  // }
  //view api
  singledata(id: any) {
    let ids = id;
    return this.http.get(this.url + "/view/" + `${ids}`);
  }
  //delete api
  mydelete(id: any) {
    let ids = id;
    return this.http.delete(this.url +"/deleterecord/"+`${ids}`)
  }
  //update api call
  updatedata(data:any,id: any) {
    let ids = id;
    return this.http.get(this.url + "/updaterecord/" + `${ids}`);
  }
//singleuser api for get api for update data
singleuser(id:any)
{
  let ids = id;
  return this.http.get(`${this.url+"/singledatas/"}${ids}`)
}



}


