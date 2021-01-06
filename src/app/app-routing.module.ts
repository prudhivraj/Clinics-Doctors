import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClinicsComponent } from '../app/clinics/clinics.component'
import { DoctorsComponent } from '../app/doctors/doctors.component'
const routes: Routes = [
  { path: '', redirectTo: 'clinics', pathMatch: 'full' },
  { path: 'clinics', component: ClinicsComponent },
  { path: 'clinics/:id', component: DoctorsComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
