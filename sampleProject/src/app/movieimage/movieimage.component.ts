import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movieimage',
  templateUrl: './movieimage.component.html',
  styleUrls: ['./movieimage.component.css']
})
export class MovieimageComponent implements OnInit {

  public movie: any[];  
   constructor() { }  
   ngOnInit() {  
   this.movie = [{    
      moviepic: 'assets/images/bahubali.jpg',  
      },  
    ];  
  } 

}
