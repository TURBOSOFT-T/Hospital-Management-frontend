import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

 // doctors: Doctor[];
message='';

lastName='';
// currentPatient: Patient[];
 doctors: any;
  currentIndex = -1;
  currentDoctor = null;
  constructor(private doctorService: DoctorService,
    private router: Router) { }

  ngOnInit(): void {
    this.getDoctors();
    this.message='';
  }

  private getDoctors(){
    this.doctorService.getDoctorsList().subscribe(data => {
      this.doctors = data;
    });
  }

  doctorDetails(id: number){
    this.router.navigate(['doctor-details', id]);
  }

  updateDoctor(id: number){
    this.router.navigate(['update-doctor', id]);
        this.message = 'It was updated successfully!';






  }

  deleteDoctor(id: number){
    this.doctorService.deleteDoctor(id).subscribe( data => {
      console.log(data);
      this.getDoctors();
    })
  }

  searchTitle() {
    this.currentDoctor = [];
    this.currentIndex = -1;
    this.doctorService.findByLastName(this.lastName)
      .subscribe(
        data => {
          this.doctors = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


}
