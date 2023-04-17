import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  @Output() myEvent = new EventEmitter();
  usrName="";
  usrAge="";
  Add(){
    // if (this.usrName && this.usrAge){
    let newStudent = {name:this.usrName, age:this.usrAge};
    // console.log(newStudent);
    this.usrAge = "";
    this.usrName = "";
    this.myEvent.emit(newStudent);
  // }
  }
}
