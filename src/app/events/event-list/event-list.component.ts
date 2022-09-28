import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { EventsService } from '../shared/events.service';

declare let toastr: { success: (arg0: string) => void; };

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: any[] =[];

  constructor(private eventService: EventsService) {}

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  // handleBtnClick(data: any){
  //   console.log('received:', data);
  // }


  handleThumbnailClick(eventName: string){
    toastr.success(eventName);
  }
}
