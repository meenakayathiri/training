import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mobiledescription',
  templateUrl: './mobiledescription.component.html',
  styleUrls: ['./mobiledescription.component.css']
})
export class MobiledescriptionComponent implements OnInit {

  public images: any = null;  
  public img: any [];  
  constructor(  
     public activatedRoute: ActivatedRoute  
  ) { }  
  ngOnInit() {  
  this.img = [{  
     model: 'Nokia 5.5',  
     modelOS: '',  
     modeldescription01: 'This model is released on 2020 January. Weight 150g, 8.3mm thickness Android 8.0, up to Android 10, Android One 16GB/32GB storage, microSDXC',
      mobilepic: 'assets/images/nokia.jpg' , 
     },
  ];  
  this.activatedRoute.params.subscribe(param => {  
     
     this.images = this.img[param['id']];  
     });  
    }  

}
