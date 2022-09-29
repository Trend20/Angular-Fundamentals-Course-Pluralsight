import { Routes } from "@angular/router";
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventListComponent } from "./events/event-list/event-list.component";
import { NewEventComponent } from "./events/new-event/new-event.component";

export const appRoutes: Routes =[
  {
    path: 'events/new',
    component: NewEventComponent
  },
  {
    path: 'events',
    component: EventListComponent
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent
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
