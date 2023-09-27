import { Component } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-hedder',
  templateUrl: './hedder.component.html',
  styleUrls: ['./hedder.component.scss']
})
export class HedderComponent {
  
mysearch = new FormGroup({
  searchcontent:new FormControl()
  
});
abcd()
{
  console.log(this.mysearch.value);
  window.location.href=`https://www.google.com/search?q=${this.mysearch.value.searchcontent}&sxsrf=AB5stBhjhgIJ7GmVk0iEAZ2QzyyMSivJ5g%3A1689679382526&source=hp&ei=Fna2ZNPXHafS1e8P8ver-Ak&iflsig=AD69kcEAAAAAZLaEJgK7_Cu8DUf1t4iAYDi1pQUGe4Zs&ved=0ahUKEwjTuoKbkpiAAxUnafUHHfL7Cp8Q4dUDCAk&uact=5&oq=react&gs_lp=Egdnd3Mtd2l6IgVyZWFjdDIHECMYigUYJzIHECMYigUYJzIHECMYigUYJzIHEAAYigUYQzIHEAAYigUYQzIHEAAYigUYQzIHEAAYigUYQzIHEAAYigUYQzINEAAYigUYsQMYgwEYQzINEAAYigUYsQMYgwEYQ0ixGFAAWN4WcAh4AJABAJgBtAGgAaAGqgEDMC41uAEDyAEA-AEBqAIKwgILEAAYgAQYsQMYgwHCAgsQLhiABBjHARjRA8ICBxAjGOoCGCc&sclient=gws-wiz`
}

}
