import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab3';
  UserData:any;
  Students:{}[] = [];
  getData(data:any){
    this.UserData = {name:data.name,age:data.age};
    if(20<this.UserData.age&&this.UserData.age<40 && this.UserData.name.length>=3)
    this.Students.push(this.UserData);
  }
}
