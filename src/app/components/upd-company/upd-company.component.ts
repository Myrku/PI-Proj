import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-upd-company',
  templateUrl: './upd-company.component.html',
  styleUrls: ['./upd-company.component.scss']
})
export class UpdCompanyComponent implements OnInit {

  constructor() { }
  name: string;
  @Output() onChanged = new EventEmitter<any>();
  @Input() company: any;

  ngOnInit(): void {
    this.name = this.company.name;
  }

  clickUpd(): any {
    this.company.name = this.name;
    this.clickCancel();
  }

  clickCancel(): any {
    this.onChanged.emit();
  }
}
