import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moviedescription',
  templateUrl: './moviedescription.component.html',
  styleUrls: ['./moviedescription.component.css']
})
export class MoviedescriptionComponent implements OnInit {

  public movie: any = null;  
  public mov: any [];  
  constructor(  
     public activatedRoute: ActivatedRoute  
  ) { }  
  ngOnInit() {  
  this.mov = [{  
     moviename: 'Bahubali',  
     moviegenre: 'Epic Film',  
     moviedescription01: 'The Kingdom of Mahishmati is ruled by queen Sivagami (Ramya) who is married to Bijjaladeva (Nassar). She takes charge of the kingdom when Amarendra Baahubali’s (Prabhas) mother passes away during labour. She takes care of Amarendra like her own son and ensures that he is brought up with the ability to rule the kingdom one day. Amarendra Baahubali also has a cousin brother Bhallala Deva (Rana Daggubati) who is Sivagami’s son by blood. With two sons and one kingdom to rule, Sivagami decides to test both her sons. She challenges them to win the upcoming war against the Kalakeyas and promises that whoever is victorious will be crowned the king.',   
     moviepic: 'assets/images/bahubali.jpg',  
     },  
  ];  
  this.activatedRoute.params.subscribe(param => {  
     
     this.movie = this.mov[param['id']];  
     });  
    }  
  

}
