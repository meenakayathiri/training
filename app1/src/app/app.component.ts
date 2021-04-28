import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';
  myValue=''
  i:number=1
  click()
  {
    console.log("you have clicked the button")
    this.myValue = "you have clicked the button " +  this.i++ + " times";

  }
}

