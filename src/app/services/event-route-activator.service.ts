import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import { EventsService } from '../events/shared/events.service';

@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorService implements CanActivate{

  constructor(private router: Router, private eventService: EventsService) { }

  canActivate(route: ActivatedRouteSnapshot){
     const eventExist =  !!this.eventService.getEvent(+route.params['id'])

     if(!eventExist){
      this.router.navigate(['/404'])
     }

     return eventExist;
  }
}
