import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login';
import { SignupComponent } from './features/auth/signup';
import { ValidationComponent } from './features/auth/verification';
import { HomeComponent } from './features/home';
import { LayoutComponent } from './shared/components/layout';
import { OnBoardingComponent } from './features/on-boarding';
import { FromFirmComponent } from './features/from-firm';
import { ToFirmComponent } from './features/to-firm';
import { ContactUsComponent } from './features/contact-us';
import { MyProfileComponent } from './features/my-profile';
import { AuthGuard } from './core/guards/auth.guard';
import { DataViewerComponent } from './features/data-viewer';
import { CpaBotComponent } from './features/cpa-bot';
import { UsersComponent } from './features/users';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'validate', component: ValidationComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'on-boarding',
        component: OnBoardingComponent
      },
      {
        path: 'from-firm',
        component: FromFirmComponent
      },
      {
        path: 'to-firm',
        component: ToFirmComponent
      },
      {
        path: 'from-data-viewer',
        component: DataViewerComponent
      },
      {
        path: 'cpa-bot',
        component: CpaBotComponent
      },
      {
        path: 'support',
        component: ContactUsComponent
      },
      {
        path: 'profile',
        component: MyProfileComponent
      },
      {
        path: 'users',
        component: UsersComponent
      }
    ],
    // canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '' }
];