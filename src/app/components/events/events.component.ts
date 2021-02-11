import {Component, OnInit} from '@angular/core';
import {DataStudentsService} from '../../services/data-students.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  showAdd = false;
  showUpd = false;
  selectEvent: any;
  type: number;
  filterText = '';
  eventList: any;

  constructor(public dataStudentsService: DataStudentsService) {
  }

  ngOnInit(): void {
    this.eventList = this.dataStudentsService.dataEvent;
  }

  clickDelEvent(event: any): void {
    this.dataStudentsService.dataEvent.splice(this.dataStudentsService.dataEvent.indexOf(event), 1);
  }

  clickAddEvent(): void {
    this.showAdd = true;
    this.showUpd = false;
  }
  clickAddCancel(): void {
    this.showAdd = false;
  }

  clickUpdEvent(event: any): void {
    this.selectEvent = event;
    this.showUpd = true;
    this.showAdd = false;
  }
  clickUpdCancel(): void {
    this.showUpd = false;
  }

  changeInp(): void {
    const t: number = +this.type;
    if (this.filterText.length > 0) {
      if (t === 1) {
        this.eventList = this.dataStudentsService.dataEvent.filter(item => item.text.toLowerCase()
          .includes(this.filterText.toLowerCase()));
      }  else if (t === 2) {
        const x: number = +this.filterText;
        this.eventList = this.dataStudentsService.dataEvent.filter(item => item.date.toLowerCase()
          .includes(this.filterText.toLowerCase()));
      }
    } else {
      this.eventList = this.dataStudentsService.dataEvent;
    }
  }
}
