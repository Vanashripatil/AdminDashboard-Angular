import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExtractionComponent } from './extraction/extraction.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { UpgradeplanComponent } from './upgradeplan/upgradeplan.component';
import { UploadComponent } from './upload/upload.component';


const routes: Routes = [
  {
    path: 'dashboard', component: HeaderComponent , 
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'about', component: AboutComponent },
      { path: 'upgradeplan', component: UpgradeplanComponent },
      { path: 'upload', component: UploadComponent },
      { path: 'subscription', component: SubscriptionComponent },
      { path: 'extraction', component: ExtractionComponent }
    ], 
  },
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/admin', pathMatch: 'full' }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
