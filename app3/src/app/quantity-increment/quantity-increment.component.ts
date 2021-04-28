import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity-increment',
  templateUrl: './quantity-increment.component.html',
  styleUrls: ['./quantity-increment.component.css']
})
export class QuantityIncrementComponent implements OnInit {   
 constructor() { }
  ngOnInit() {
  }
  quantity:number=1;
  i=1
  plus(){
    if(this.i != 100)
    {
      this.i++;
      this.quantity = this.i;
    }
  } 
  minus(){
    if(this.i != 0)
    {
      this.i--;
      this.quantity = this.i;
    } 
  }  
}
