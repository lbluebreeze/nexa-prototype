import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetectPhisingComponent } from './components/articles/detect-phising/detect-phising.component';
import { DetectSuspiciousEmailComponent } from './components/articles/detect-suspicious-email/detect-suspicious-email.component';
import { PhishingComponent } from './components/articles/phishing/phishing.component';
import { SuspiciousEmailAlertComponent } from './components/articles/suspicious-email-alert/suspicious-email-alert.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: IndexComponent
  },
  {
    path: 'que-sabes-de-phishing',
    component: PhishingComponent
  },
  {
    path: 'como-detectar-un-mensaje-de-phishing',
    component: DetectPhisingComponent
  },
  {
    path: 'alerta-correo-sospechoso',
    component: SuspiciousEmailAlertComponent
  },
  {
    path: 'detecta-el-correo-sospechoso',
    component: DetectSuspiciousEmailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
