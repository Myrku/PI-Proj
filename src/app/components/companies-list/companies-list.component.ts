import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataStudentsService} from '../../services/data-students.service';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.scss']
})
export class CompaniesListComponent implements OnInit {
  @Output() onChanged = new EventEmitter<any>();

  constructor(public dataStudentsService: DataStudentsService) {
  }

  ngOnInit(): void {
  }

  clickCompany(company: any): any {
    this.onChanged.emit(company);
  }

}
