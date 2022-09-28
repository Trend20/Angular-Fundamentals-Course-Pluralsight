import { Component, OnInit } from '@angular/core';
import { EventsService } from '../shared/events.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: any
  constructor(private eventService: EventsService) { }

  ngOnInit(): void {
    this.event = this.eventService.getEvent(1)
  }

}
