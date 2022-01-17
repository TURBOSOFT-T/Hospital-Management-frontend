import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';

const routes: Routes = [

  {path:'doctors', component: DoctorListComponent},
  {path:'create-doctor', component:CreateDoctorComponent},
  {path:'', redirectTo: 'doctors', pathMatch :'full'},
  {path:'update-doctor/:id', component: UpdateDoctorComponent},
  {path:'doctor-details/:id', component: DoctorDetailsComponent},
  {path:'patients', component: PatientListComponent},
  {path:'create-patient', component:CreatePatientComponent},
  {path:'', redirectTo: 'patients', pathMatch:'full'},
  {path:'update-patient/:id' , component: UpdatePatientComponent},
  {path:'patient-details/:id', component: PatientDetailsComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
