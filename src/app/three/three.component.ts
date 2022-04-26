import { concatWith } from 'rxjs/operators';
import { range, filter, take, map, reduce } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss']
})
export class ThreeComponent implements OnInit {

  value: number = 0;

  source$ = range(1, 100);

  constructor() { }

  ngOnInit(): void {
    this.source$.pipe(
      filter((x: number) => x % 5 === 0),
      take(15),
      map((x: number) => x - 2),
      concatWith(this.source$),
      reduce((acc: number, next: number) => acc + next, 0)
    ).subscribe(value => {
      this.value = value;
    })
  }

}
