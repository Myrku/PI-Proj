import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {DataStudentsService} from '../../services/data-students.service';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit, DoCheck {

  @Input() company: any;
  public companyEvent: any;

  constructor(private dataStudentsService: DataStudentsService) {
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    if (this.company) {
      this.companyEvent = this.dataStudentsService.dataEvent.filter((elem, index, array) => {
        return (elem.company?.id === this.company.id);
      });
    }
    else {
      this.companyEvent = null;
    }
  }
}
