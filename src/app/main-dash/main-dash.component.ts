import { Component, OnInit} from '@angular/core'; //OnInit => lifecycle hook
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { QuickLunchService } from "../services/quick-lunch.service";
import { Food } from "../models/food.interface";//import model

@Component({
  selector: 'main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.css']
})
export class MainDashComponent implements OnInit {

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          //{ title: 'A la carte', cols: 2, rows: 1 },
          { title: "Burgers", cols: 2, rows: 1, id: 'brg' },
          { title: "Galettes/crêpes", cols: 2, rows: 1, id: 'glt' },
          { title: "Pizza", cols: 2, rows: 1, id: 'pzz' }
        ];
      }

      return [
        //{ title: 'A la carte', cols: 2, rows: 1 },
        { title: "Burgers", cols: 2, rows: 1, id: 'brg' },
        { title: "Galettes/crêpes", cols: 2, rows: 1, id: 'glt' },
        { title: "Pizza", cols: 2, rows: 1, id: 'pzz' }
      ];


    })
  );

  //vars initialized by the instance of the webservice
  burgers: Food[];
  galettes: Food[];
  pizzas: Food[];  

  constructor(
    private breakpointObserver: BreakpointObserver,
    private qls: QuickLunchService//accessor instance name:classe instancied (dependancy injection no need to create new instance)
  ) {}

  ngOnInit() {
    this.burgers = this.qls.burgers;//return food array    
    this.galettes = this.qls.galettes;
    this.pizzas = this.qls.pizzas;
    //console.log(this.burgers);
  }
}
