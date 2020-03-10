import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.css']
})
export class MainDashComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'A la carte', cols: 2, rows: 1 },
          { title: 'Burgers', cols: 2, rows: 1 },
          { title: 'Galettes/Crêpes', cols: 2, rows: 2 },
          { title: 'Pizzas', cols: 2, rows: 1 }
        ];
      }

      return [
        { title: 'A la carte', cols: 2, rows: 1 },
        { title: 'Burgers', cols: 2, rows: 1 },
        { title: 'Galettes/Crêpes', cols: 2, rows: 2 },
        { title: 'Pizzas', cols: 2, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
