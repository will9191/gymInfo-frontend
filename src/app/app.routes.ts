import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AboutComponent } from './components/about/about.component';
import { AllExercisesComponent } from './components/pages/all-exercises/all-exercises.component';
import { ExerciseComponent } from './components/pages/exercise/exercise.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        title: 'Exercise',
        component: AllExercisesComponent,
      },
      {
        path: ':id',
        title: 'Exercise',
        component: ExerciseComponent,
      },
      {
        path: 'about',
        title: 'About',
        component: AboutComponent,
      },

      {
        path: 'profile',
        title: 'Profile',
        component: ProfileComponent,
      },
    ],
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
    path: '**',
    title: 'Not Found',
    component: PageNotFoundComponent,
  },
];
