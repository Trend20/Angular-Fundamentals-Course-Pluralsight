import { Routes } from "@angular/router";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventListComponent } from "./events/event-list/event-list.component";

export const appRoutes: Routes =[
  {
    path: 'events',
    component: EventListComponent
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent
  },
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  }
]
