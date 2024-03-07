import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  redirectToHome() {
    this.router.navigateByUrl('dashboard/dashboard');
  }
  redirectToAbout() {
    this.router.navigateByUrl('dashboard/about');
  }
  logMeOut() {
    this.router.navigateByUrl('admin');
  }

  redirectToUpgradePlan(){
    this.router.navigateByUrl('dashboard/upgradeplan');
  }

  redirectToUpload(){
    this.router.navigateByUrl('dashboard/upload');
  }

  redirectToSubscription(){
    this.router.navigateByUrl('dashboard/subscription');
  }

  redirectToExtraction(){
    this.router.navigateByUrl('dashboard/extraction');
  }


}
