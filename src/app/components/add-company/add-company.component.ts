import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataStudentsService} from '../../services/data-students.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss'],
})
export class AddCompanyComponent implements OnInit {

  name: string;
  @Output() onChanged = new EventEmitter<any>();

  constructor(private dataStudentsService: DataStudentsService) { }

  ngOnInit(): void {
  }

  clickAdd(): any {
    this.dataStudentsService.dataCompanies.unshift({id: Date.now() % (10 * 365 * 24 * 60 * 60 * 1000), name: this.name});
    this.clickCancel();
  }

  clickCancel(): any {
    this.onChanged.emit();
  }
}
