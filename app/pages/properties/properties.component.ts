import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PropertiesService } from 'src/app/properties.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  // constructor(private http:HttpClient) { }
  constructor(private allProperties: PropertiesService,
    private sanitizer: DomSanitizer) { }


  properties_obj: any;
  properties_obj$: any;
  url: any;
  
  

  ngOnInit(): void {
    this.properties_obj$ = this.allProperties.getProperties()
    // this.pro.getProperties().subscribe(res => {
    //   this.properties_obj = [res];
    //   console.log(res);
      
    // })
    
    
    
    
    
  }
  
}

