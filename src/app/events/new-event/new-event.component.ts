import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // navigate back to the events page
  cancelEvent(){
    this.router.navigate(['/events']);
  }
}
