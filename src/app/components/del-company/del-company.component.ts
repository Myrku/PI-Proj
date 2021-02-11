import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataStudentsService} from '../../services/data-students.service';

@Component({
  selector: 'app-del-company',
  templateUrl: './del-company.component.html',
  styleUrls: ['./del-company.component.scss']
})
export class DelCompanyComponent implements OnInit {

  @Input() company: any;
  @Output() onChanged = new EventEmitter<any>();

  constructor(private dataStudentsService: DataStudentsService) {
  }

  ngOnInit(): void {
  }

  clickDel(): void {
    const ind = this.dataStudentsService.dataCompanies.indexOf(this.company);
    this.dataStudentsService.dataCompanies.splice(ind, 1);
    this.clickCancel();
  }

  clickCancel(): any {
    this.onChanged.emit();
  }
}
