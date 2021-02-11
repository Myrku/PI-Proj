import {Component, DoCheck, OnInit} from '@angular/core';
import {DataStudentsService} from '../../services/data-students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit, DoCheck {
  public student: any;
  showAdd = false;
  showDel = false;
  showUpd = false;

  constructor(private dataStudentsService: DataStudentsService) {
  }

  ngOnInit(): void {
  }

  onChanged(student: any): void {
    if (student) {
      this.student = student;
    }
  }

  clickAdd(): void {
    this.showAdd = true;
    this.showDel = false;
    this.showUpd = false;
  }

  clickAddCancel($event: any): void {
    this.showAdd = false;
  }

  clickDel(): void {
    this.showDel = true;
    this.showAdd = false;
    this.showUpd = false;
  }

  clickUpd(): void {
    this.showUpd = true;
    this.showDel = false;
    this.showAdd = false;
  }

  clickDelCancel($event: any): void {
    this.showDel = false;
  }

  clickUpdCancel($event: any): void {
    this.showUpd = false;
  }

  ngDoCheck(): void {
    if (this.dataStudentsService.dataStudents.indexOf(this.student) < 0) {
      this.student = null;
    }
  }
}
