import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {DataStudentsService} from "../../services/data-students.service";

@Component({
  selector: 'app-students-event',
  templateUrl: './students-event.component.html',
  styleUrls: ['./students-event.component.scss']
})
export class StudentsEventComponent implements OnInit, DoCheck {

  @Input() student: any;
  public studentEvents: any;

  constructor(private dataStudentsService: DataStudentsService) {
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    if (this.student) {
      this.studentEvents = this.dataStudentsService.dataEvent.filter((elem, index, array) => {
        return (elem.student.id === this.student.id);
      });
    } else {
      this.studentEvents = null;
    }
  }

}
