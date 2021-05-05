import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobileimage',
  templateUrl: './mobileimage.component.html',
  styleUrls: ['./mobileimage.component.css']
})
export class MobileimageComponent implements OnInit {
  public images: any[];  
  constructor() { }  
  ngOnInit() {  
  this.images = [{    
     mobilepic: 'assets/images/nokia.jpg',  
     },  
   ];  
 } 
}
