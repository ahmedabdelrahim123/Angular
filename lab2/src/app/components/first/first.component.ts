import {Component } from '@angular/core';

@Component({
  selector:"app-first",
  templateUrl:"./first.component.html",
  styleUrls:["./first.component.css"]
})
export class FirstComponent{
  your_words = "";
  getValue(e:any){
    this.your_words = e.target.value;
  }
  reset(){
    this.your_words="";
  }
}
