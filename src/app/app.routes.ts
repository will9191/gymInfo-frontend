import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'exercise',
    title: 'Exercise',
    component: ExerciseComponent,
  },
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent,
  },
  {
    path: 'register',
    title: 'Register',
    component: RegisterComponent,
  },
  {
    path: 'profile',
    title: 'Profile',
    component: ProfileComponent,
  },
  {
    path: '**',
    title: 'Not Found',
    component: PageNotFoundComponent,
  },
];
