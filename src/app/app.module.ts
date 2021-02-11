import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { StudentsComponent } from './components/students/students.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { StudentsEventComponent } from './components/students-event/students-event.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { CompaniesListComponent } from './components/companies-list/companies-list.component';
import { CompanyInfoComponent } from './components/company-info/company-info.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DelStudentComponent } from './components/del-student/del-student.component';
import { UpdStudentComponent } from './components/upd-student/upd-student.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { DelCompanyComponent } from './components/del-company/del-company.component';
import { UpdCompanyComponent } from './components/upd-company/upd-company.component';
import { EventsComponent } from './components/events/events.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { UpdEventComponent } from './components/upd-event/upd-event.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    StudentsComponent,
    StudentsListComponent,
    StudentsEventComponent,
    AddStudentComponent,
    CompaniesComponent,
    CompaniesListComponent,
    CompanyInfoComponent,
    DelStudentComponent,
    UpdStudentComponent,
    AddCompanyComponent,
    DelCompanyComponent,
    UpdCompanyComponent,
    EventsComponent,
    AddEventComponent,
    UpdEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
