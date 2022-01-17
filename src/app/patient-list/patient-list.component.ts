import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  //patients: Patient[];

lastName='';
// currentPatient: Patient[];
 patients: any;
  currentIndex = -1;
  currentPatient = null;

  //patient: any;
  constructor(private patientService: PatientService,
    private router: Router) { }

  ngOnInit(): void {
    this.getPatients();
    //this.currentPatient = {};
    this.retrievePatients();
    this.currentIndex = -1;
  }
  retrievePatients(): void {
    throw new Error('Method not implemented.');

  }
  refreshList() {
    this.retrievePatients();
    this.currentPatient = null;
    this.currentIndex = -1;
  }


  private getPatients(){
    this.patientService.getPatientsList().subscribe(data => {
      this.patients = data;
    });
  }


  patientDetails(id: number){
    this.router.navigate(['patient-details', id]);
  }

  updatePatient(id: number){
    this.router.navigate(['update-patient', id]);
  }

  deletePatient(id: number){
    this.patientService.deletePatient(id).subscribe( data => {
      console.log(data);
      this.getPatients();
    })
  }
  searchTitle() {
    this.currentPatient = [];
    this.currentIndex = -1;
    this.patientService.findByLastName(this.lastName)
      .subscribe(
        data => {
          this.patients = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
