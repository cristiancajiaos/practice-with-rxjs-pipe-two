import { Component, OnInit } from '@angular/core';
import { range, skip, reduce } from 'rxjs';
import { concatWith } from 'rxjs/operators';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  result: number = 0;

  source$ = range(1, 4);

  constructor() { }

  ngOnInit(): void {
    this.source$.pipe(
      skip(1),
      concatWith(this.source$),
      reduce((acc: number, next: number) => acc + next, 0)
    ).subscribe(value => {
      this.result = value;
    })
  }

}
