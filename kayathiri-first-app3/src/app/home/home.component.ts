import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../faculty.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faculties:any;
  constructor(private facSer: FacultyService) { }

  ngOnInit():void {
    this.faculties=this.facSer.getFaculties();

  }

}
