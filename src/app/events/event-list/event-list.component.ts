import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  event={
    id: 1,
    name: 'Angular Connect',
    date: '12/03/2022',
    time: '10:30am',
    price: 499.90,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location:{
      address: '00100 NRB',
      city: 'Nairobi',
      country: 'Kenya'
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  handleBtnClick(data: any){
    console.log('received:', data);
  }

}
