import { Component, OnInit } from '@angular/core';
import { range, map, distinct } from 'rxjs';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {

  result: number[] = [];

  sourceOne$ = range(1, 5);
  sourceTwo$ = range(6, 10);

  constructor() { }

  ngOnInit(): void {
    this.sourceOne$.pipe(
      map((x: number) => x - 3),
      distinct(),
      map((x: number) => x * 2)
    ).subscribe(value => {
      this.result.push(value);
    });

    this.sourceTwo$.pipe(
      map((x: number) => x * 3),
      map((x: number) => x % 2),
      distinct()
    ).subscribe(value => {
      this.result.push(value);
    })
  }

}
