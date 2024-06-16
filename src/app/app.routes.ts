import { Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { ResumeComponent } from './pages/resume/resume.component';

export const routes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent },
  { path: 'resume', component: ResumeComponent }
];
