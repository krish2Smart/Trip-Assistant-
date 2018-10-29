import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  @Input() rating;
  ratings: number[];

  constructor() { }

  ngOnInit() {
    this.ratings = Array(Math.round(this.rating)).fill(0).map((x, i) => i);
  }

}