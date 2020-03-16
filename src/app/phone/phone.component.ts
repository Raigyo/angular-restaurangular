import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cc-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {
//input decorator: from parent to children
  @Input()
  user: any;

  //EventEmitter
  //output decorator: from children to parent
  @Output()
  zoom = new EventEmitter<string>(); //zoom is the name of the custom event

  constructor() { }

  ngOnInit(): void {
  }

  //custom event
  displayNumber() {
    this.zoom.emit(this.user.phoneNumber);
  }

}
