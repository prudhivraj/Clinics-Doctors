import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.css']
})
export class ClinicsComponent implements OnInit {
  clinics: any = [
    {
      id: 1,
      name: 'Sam Clinic',
      contact: '9876543210',
      email: 'samclinic@gmail.com'
    },
    {
      id: 2,
      name: 'Apporva Clinic',
      contact: '9876543210',
      email: 'apporvasupport@gmail.com'
    }
  ]
  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }
  checkDoctors(clinic: any) {
    this.router.navigate(['/clinics', clinic.id]);
  }

}
