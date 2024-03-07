import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  toHome(){
    document.getElementById("home")?.scrollIntoView();
  }
  toAboutus(){
    document.getElementById("aboutus")?.scrollIntoView();
  }

  toProduct(){
    document.getElementById("product")?.scrollIntoView();
  }

  toContactus(){
    document.getElementById("contactus")?.scrollIntoView();
  }

}
