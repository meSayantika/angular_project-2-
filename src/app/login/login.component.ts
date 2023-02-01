import { Component, OnInit } from '@angular/core';
import { PracticeService } from '../practice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private find:PracticeService) { }
   
  dataFromServer:any;
  ngOnInit(): void {
    this.getselect()
  }
 getselect(){
 this.find.getCountryList().subscribe(list=>{
  console.log(list)
  this.dataFromServer=list
})

 }
}
