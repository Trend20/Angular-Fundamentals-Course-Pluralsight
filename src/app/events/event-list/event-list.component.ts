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

  handleThumbnailClick(eventName: string){
    toastr.success(eventName);
  }
}
