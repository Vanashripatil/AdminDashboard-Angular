import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  public rows: {}[]

  fileName: string ;
  file: File;


  constructor(private http: HttpClient) {
    this.rows = [];
   }

  ngOnInit(): void {
  }

  removeFile(x: any) {
    // this.file = null;
    this.fileName.slice(x, 1);
    
  }

  deleteRow(x: any){
    var delBtn = confirm(" Do you want to delete ?");
    if ( delBtn == true ) {
      this.rows.splice(x, 1 );
    }   
  } 

  onAddRowClick(file: any): void {
    this.rows.push(
      this.fileName = file.files[0].name
    );
  }
  
}
