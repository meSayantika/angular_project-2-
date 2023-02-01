import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }
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
  custId:any
  item: any
  ngOnInit(): void {
    this.custId=this.activatedRoute.snapshot.params['id']
    console.log(this.custId)
    this.item=this.custList[this.custList.findIndex((cust:any)=>cust.id==this.custId)]

  }
}
