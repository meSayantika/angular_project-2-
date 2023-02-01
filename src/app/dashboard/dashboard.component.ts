import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PracticeService } from '../practice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  constructor(private router:Router, private trans:PracticeService) { }
  getUserList:any
  ngOnInit(): void {
    this.getUsers()
    // this.trans.getCustList()
    // console.log(this.trans.getCustList())
  }
  show: any;
  dataFromServer: any;
  custList = [
    { id: 1, name: 'Tanmoy Mondal', email: 'mondal.tanmoy@synergicsoftek.com', age:44 },
    { id: 2, name: 'Raja Saha', email: 'raja@synergicsoftek.com' , age:43 },
    { id: 3, name: 'Suvrajit Banerjee', email: 'suvrajit@synergicsoftek.com' , age:42 },
    { id: 4, name: 'Lokesh Kumar Jha', email: 'lokesh@synergicsoftek.com' , age:36 },
    {
      id: 5,
      name: 'Chittaranjan Maity',
      email: 'chittaranjan@synergicsoftek.in', age:56
    },
    { id: 6, name: 'Utsav Roy', email: 'utsav@synergicsoftek.com' , age:-86 },
    { id: 7, name: 'Somnath Thakur', email: 'somnath@synergicsoftek.in' , age:87 },
    { id: 8, name: 'Subham Samanta', email: 'subham@synergicsoftek.in' , age:2 },
    { id: 9, name: 'Suman Mitra', email: 'suman@synergicsoftek.in', age:-32 },
    { id: 10, name: 'Sayantika Dhar', email: 'sayantika@synergicsoftek.in', age:0 },
  ];
  edit(dt:any){
    console.log(dt);
    let index= this.custList.findIndex((cust:any)=>cust.id==dt)
    console.log(this.custList[index]);dt
    this.show = (this.custList[index])
    this.router.navigate(['/details',dt])
    }
    getUsers(){
        this.trans.dataTransfer().subscribe(data=>{console.log(data)
          this.dataFromServer=data
        })
    }
    
}
