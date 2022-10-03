import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'src/app/common/toastr.service';
import { EventsService } from '../shared/events.service';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: any

  constructor(private eventService: EventsService, private toastrService: ToastrService) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(events => {this.events = events})
  }

  handleThumbnailClick(eventName: string){
    this.toastrService.success(eventName);
  }
}
