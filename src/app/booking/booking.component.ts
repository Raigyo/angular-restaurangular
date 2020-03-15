import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'; 

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  reservationForm : FormGroup;
  date = new Date();
  timeOptions = [
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30"
  ];
  peopleOptions = [1, 2, 3, 4, 5, 6, 7, 8];
  isScheduleOk = false;
  client = { firstName: '', lastName: '', email: '', phone: ''};              

  constructor(private fb: FormBuilder) {}

  //OnInit: A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
  // Define an ngOnInit() method to handle any additional initialization tasks.
  ngOnInit(): void {
    this.createForm();
  }
  //Form Controls with 3 methods
  createForm(): any {
    this.reservationForm = this.fb.group({
      date: new Date(),
      time: "",
      people: 1
    });
  }

  saveReservation() {
    if(this.reservationForm.valid) {
      console.log(this.reservationForm);
      this.isScheduleOk = true;
    }
  }

  finalizeReservation(formValue) {
    console.log(formValue);
  }
}
