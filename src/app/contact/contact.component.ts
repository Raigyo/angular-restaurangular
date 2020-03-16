import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  numberToDisplay = '';

  standard = {
    firstName: 'Benjamin',
    lastName: 'Glouton',
    role: 'Gérant',
    award: '',
    phoneNumber: '02-99-99-99-01'
  };

  sommelier = {
    firstName: 'David',
    lastName: 'Biraud',
    role: 'Sommelier',
    award: 'Meilleur Sommelier de France 2017',
    phoneNumber: '02-99-99-99-98'
  };

  chef = {
    firstName: 'Sébastien',
    lastName: 'Coirier',
    role: 'Chef cuisinier',
    award: 'Meilleur Chef de cuisine de France 2019',
    phoneNumber: '02-99-99-99-97'
  }

  constructor() { }

  ngOnInit(): void {
  }

  displayBig(telephoneNumber) {
    console.log(telephoneNumber);
    this.numberToDisplay = telephoneNumber;
  }

}
