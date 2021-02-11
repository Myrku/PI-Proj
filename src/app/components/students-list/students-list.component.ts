import {Component, DoCheck, EventEmitter, OnInit, Output} from '@angular/core';
import {DataStudentsService} from '../../services/data-students.service';
import {element} from "protractor";

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit, DoCheck {
  @Output() onChanged = new EventEmitter<any>();
  type: number;
  filterText = '';
  studList: any;

  constructor(public dataStudentsService: DataStudentsService) {
  }

  ngOnInit(): void {
    this.studList = this.dataStudentsService.dataStudents;
  }

  clickName(id: any): any {
    const student = this.dataStudentsService.dataStudents.find(item => item.id === id);
    this.onChanged.emit(student);
  }

  changeInp(): void {
    const t: number = +this.type;
    if (this.filterText.length > 0) {
      if (t === 1) {
        this.studList = this.dataStudentsService.dataStudents.filter(item => item.name.toLowerCase()
          .includes(this.filterText.toLowerCase()));
      } else if (t === 2) {
        this.studList = this.dataStudentsService.dataStudents.filter(item => item.spec.toLowerCase()
          .includes(this.filterText.toLowerCase()));
      } else if (t === 3) {
        const x: number = +this.filterText;
        this.studList = this.dataStudentsService.dataStudents.filter(item => item.syear === x);
      }
    } else {
      this.studList = this.dataStudentsService.dataStudents;
    }
  }

  ngDoCheck(): void {

  }
}
