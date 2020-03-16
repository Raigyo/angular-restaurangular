import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { debounceTime, map, tap, switchMap } from "rxjs/operators";
import { SchedulesService } from "../services/schedules.service"; //httpClient
import { EveningEvent } from "../models/evening-event.interface";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  searchTerm = new FormControl();
  //by convention we use $ for observables
  searchTerms$: Observable<string> = this.searchTerm.valueChanges;
  result: EveningEvent[] = [];

  constructor(private scheduleService: SchedulesService) { }

  ngOnInit(): void {
    //observable
    //flux
    this.searchTerms$
    //operators (have to be imported)
    .pipe(
      debounceTime(1000),
      //map return only the second flux
      //map(word => this.scheduleService.search(word)),
      //switchMap return the second flux and put it on the main flux (flattening), because the result is
      //an observable from an observable
      switchMap(word => this.scheduleService.search(word)),    
      tap(x => console.log('result:', x)) 
    )
    //push
    .subscribe(data => this.result = data);
  }

}
