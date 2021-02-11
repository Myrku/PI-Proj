import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataStudentsService} from '../../services/data-students.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  @Output() onChanged = new EventEmitter<any>();
  studentId: number;
  companyId: number;
  eventText: string;
  date: Date;

  constructor(public dataStudentsService: DataStudentsService) {
  }

  ngOnInit(): void {
  }

  clickAdd(): void {
    const newid = Date.now() % (10 * 365 * 24 * 60 * 60 * 1000);
    const y: number = +this.studentId;
    const c: number = +this.companyId;
    const stud = this.dataStudentsService.dataStudents.find(item => item.id === y);
    const comp = this.dataStudentsService.dataCompanies.find(item => item.id === c);
    this.dataStudentsService.dataEvent.unshift({
      company: comp,
      date: this.date.toString(),
      id: newid,
      student: stud,
      text: this.eventText
    });
  }

  clickCancel(): void {
    this.onChanged.emit();
  }
}
