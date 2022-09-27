import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  @Input() event: any;
  // nestedString: string = 'Nested String!'
  // @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  // handleClickMe(){
  //   this.btnClick.emit(this.event.name)
  // }

  // logFoo(){
  //   console.log('foo!')
  // }

}
