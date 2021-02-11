import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  showStud = true;
  showComp = false;
  showEvent = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  clickStud(): void {
    this.showStud = true;
    this.showComp = false;
    this.showEvent = false;
  }

  clickComp(): void {
    this.showStud = false;
    this.showComp = true;
    this.showEvent = false;
  }

  clickEvent(): void {
    this.showStud = false;
    this.showComp = false;
    this.showEvent = true;
  }
}
