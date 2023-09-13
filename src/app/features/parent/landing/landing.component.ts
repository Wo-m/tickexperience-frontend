import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit{

  // sports: string[] = ['Running', 'Swimming', 'Rugby']
  sports = [
    {name: "Running", dates: [1, 2,3, 4, 5]},
    {name: "Swimming", dates: [1, 2,3, 4, 5]},
    {name: "Rugby", dates: [1, 2,3, 4, 5]}
  ]
  selectedSport: {name: string, dates: number[]} = this.sports[0]

  constructor() {
  }

  ngOnInit(): void {
  }

  selectSport(sport: { name: string; dates: number[];}) {
    this.selectedSport = sport;
  }

  scrollLeft(id: string) {
    this.scrollNav(-100, id)
  }

  scrollRight(id: string) {
    this.scrollNav(100, id)
  }

  scrollNav(left: number, id: string) {
    const nav = document.getElementById(id)
    if (nav === null) {
      return;
    }
    nav.scrollBy({left: left, behavior: 'smooth'})
  }
}
