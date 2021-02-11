import {Component, DoCheck, OnInit} from '@angular/core';
import {DataStudentsService} from '../../services/data-students.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit, DoCheck {

  public company: any;
  showAdd = false;
  showDel = false;
  showUpd = false;

  constructor(private dataStudentsService: DataStudentsService) {
  }

  ngOnInit(): void {
  }

  onChanged(company: any): void {
    if (company) {
      this.company = company;
    }
  }

  clickAdd(): void {
    this.showAdd = true;
    this.showDel = false;
    this.showUpd = false;
  }

  clickAddCancel(): void {
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

  clickDelCancel(): void {
    this.showDel = false;
  }

  clickUpdCancel(): void {
    this.showUpd = false;
  }

  ngDoCheck(): void {
    if (this.dataStudentsService.dataCompanies.indexOf(this.company) < 0) {
      this.company = null;
    }
  }
}
