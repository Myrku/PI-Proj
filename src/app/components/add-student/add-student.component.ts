import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataStudentsService} from '../../services/data-students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  @Output() onChanged = new EventEmitter<any>();

  date: Date = new Date();

  name: string;
  specInp: string;
  year: number;
  group: number;

  constructor(public dataStudentsService: DataStudentsService) {
  }

  ngOnInit(): void {
  }

  clickCancel(): void {
    this.onChanged.emit();
  }
  clickAdd(): void {
    const newid = Date.now() % (10 * 365 * 24 * 60 * 60 * 1000);
    this.dataStudentsService.dataStudents.unshift({id: newid,
      group: this.group,
      name: this.name,
      spec: this.specInp,
      syear: this.year
    });
  }
}
