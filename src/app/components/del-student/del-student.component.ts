import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataStudentsService} from '../../services/data-students.service';

@Component({
  selector: 'app-del-student',
  templateUrl: './del-student.component.html',
  styleUrls: ['./del-student.component.scss']
})
export class DelStudentComponent implements OnInit {

  @Output() onChanged = new EventEmitter<any>();
  @Input() student: any;

  constructor(private dataStudentsService: DataStudentsService) { }

  ngOnInit(): void {
  }

  clickCancel(): void {
    this.onChanged.emit();
  }

  clickDel(): void {
    this.dataStudentsService.dataStudents.splice(this.dataStudentsService.dataStudents.indexOf(this.student), 1);
    this.clickCancel();
  }
}
