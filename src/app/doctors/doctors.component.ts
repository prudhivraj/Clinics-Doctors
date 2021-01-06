import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
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
    },
    {
      id: 3,
      name: 'Jacob Clinic',
      contact: '9876543210',
      email: 'jacobclinicsupport@gmail.com'
    }
  ]
  doctors: any = [
    {
      1: [
        {
          id: 1,
          name: 'Mark',
          speciality: 'dermatologist',
          duration: 20,
          lastbookedTime: 0,
          isDocAvailable: true
        },
        {
          id: 2,
          name: 'Jacob',
          speciality: 'Physiotherapist',
          duration: 20,
          lastbookedTime: 0
          , isDocAvailable: true
        },
        {
          id: 3,
          name: 'Larry',
          speciality: 'Cardiothoracic Surgeon',
          duration: 20,
          lastbookedTime: 0,
          isDocAvailable: true
        }
      ],
      2: [
        {
          id: 4,
          name: 'John',
          speciality: 'Dentist',
          duration: 20,
          lastbookedTime: 0,
          isDocAvailable: true
        },
        {
          id: 5,
          name: 'Doe',
          speciality: 'NeuroSurgeon',
          duration: 20,
          lastbookedTime: 0,
          isDocAvailable: true
        },
        {
          id: 6,
          name: 'Mary',
          speciality: 'Ophthalmologist',
          duration: 20,
          lastbookedTime: 0,
          isDocAvailable: true
        }
      ]
    }
  ]
  doctor: any;
  docAvalible = true;
  clinic: any
  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res => {
      console.log(res["id"]);

      if (res && res["id"]) {
        this.doctor = this.doctors[0][res["id"]]
        this.clinic = this.clinics.filter((doc: any) => {
          return doc.id == res["id"]
        });
      } else {
        console.log(" URLparams not found ");

      }
    }))
  }
  BookAppointment(doc: any) {
    if (doc.lastbookedTime) {
      let timeDiff = Date.now() - doc.lastbookedTime;
      let min = timeDiff / 60000;
      if (min < 20) {
        doc.isDocAvailable = false;
      } else {
        doc.isDocAvalible = true;
      }
    } else {
      doc.isDocAvailable = false;
      doc.lastbookedTime = Date.now();
      setTimeout(function () {
        doc.isDocAvailable = true;
      }, 20 * 1000 * 60)
    }
  }

}
