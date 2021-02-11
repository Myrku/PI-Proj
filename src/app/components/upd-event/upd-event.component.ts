import {Component, DoCheck, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataStudentsService} from '../../services/data-students.service';

@Component({
  selector: 'app-upd-event',
  templateUrl: './upd-event.component.html',
  styleUrls: ['./upd-event.component.scss']
})
export class UpdEventComponent implements OnInit, DoCheck {

  @Output() onChanged = new EventEmitter<any>();
  @Input() eventInp: any;

  studentId: number;
  companyId: number;
  eventText: string;
  date: Date;

  constructor(public dataStudentsService: DataStudentsService) {
  }

  ngOnInit(): void {
    if (this.eventInp) {
      this.studentId = this.eventInp.student.id;
      this.companyId = this.eventInp.company.id;
      this.eventText = this.eventInp.text;
      this.date = this.eventInp.date;
      console.log(this.companyId);
    }
  }

  clickCancel(): void {
    this.onChanged.emit();
  }

  clickUpdEvent(): void {
    console.log(this.companyId);
    const y: number = +this.studentId;
    const c: number = +this.companyId;
    const stud = this.dataStudentsService.dataStudents.find(item => item.id === y);
    const comp = this.dataStudentsService.dataCompanies.find(item => item.id === c);

    this.eventInp.company = comp;
    this.eventInp.student = stud;
    this.eventInp.date = this.date.toString();
    this.eventInp.text = this.eventText;
    this.clickCancel();
  }

  ngDoCheck(): void {

  }
}
