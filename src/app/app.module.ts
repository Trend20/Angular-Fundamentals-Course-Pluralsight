import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavComponent } from './nav/nav/nav.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { NewEventComponent } from './events/new-event/new-event.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { EventsService } from './events/shared/events.service';
import { ToastrService } from './common/toastr.service';
import { EventRouteActivatorService } from './services/event-route-activator.service';
import { EventListResolverService } from './services/event-list-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    NewEventComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventsService,
    ToastrService,
    EventRouteActivatorService,
    EventListResolverService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: NewEventComponent){
  if(component.isDirty){
    return window.confirm('You have not save the content, do you want to leave the page or cancel?')
  }
  return true
}
