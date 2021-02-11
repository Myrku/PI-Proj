import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataStudentsService} from '../../services/data-students.service';

@Component({
  selector: 'app-upd-student',
  templateUrl: './upd-student.component.html',
  styleUrls: ['./upd-student.component.scss']
})
export class UpdStudentComponent implements OnInit {

  @Input() student: any;
  @Output() onChanged = new EventEmitter<any>();

  date = new Date();
  name: string;
  specInp: string;
  year: number;
  group: number;

  constructor(public dataStudentsService: DataStudentsService) {
  }

  ngOnInit(): void {
    this.name = this.student.name;
    this.specInp = this.student.spec;
    this.year = this.student.syear;
    this.group = this.student.group;
  }

  clickUpd(): void {
    this.student.name = this.name;
    this.student.spec = this.specInp;
    this.student.syear = this.year;
    this.student.group = this.group;
    this.clickCancel();
  }

  clickCancel(): void {
    this.onChanged.emit();
  }

}
