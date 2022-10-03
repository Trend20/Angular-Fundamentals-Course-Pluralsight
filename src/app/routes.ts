import { Routes } from "@angular/router";
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventListComponent } from "./events/event-list/event-list.component";
import { NewEventComponent } from "./events/new-event/new-event.component";
import { EventListResolverService } from "./services/event-list-resolver.service";
import { EventRouteActivatorService } from "./services/event-route-activator.service";

export const appRoutes: Routes =[
  {
    path: 'events/new',
    component: NewEventComponent,
    canDeactivate: ['canDeactivateCreateEvent']
  },
  {
    path: 'events',
    component: EventListComponent,
    resolve: {
      events: EventListResolverService
    }
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventRouteActivatorService]
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  }
]
