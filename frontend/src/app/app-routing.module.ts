import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { CruddataComponent } from './cruddata/cruddata.component';
import { ViewComponent } from './view/view.component';
import { UpdatedataComponent } from './updatedata/updatedata.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent
  },
{
  path:'home',
  component:HomeComponent
},
{
  path:'team',
  component:TeamComponent
},
{
  path:'crud',
  component:CruddataComponent
},{ 
  path:'crud/view/:id',  
  component:ViewComponent
},
{ 
  path:'crud/edit/:id',  
  component:UpdatedataComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
