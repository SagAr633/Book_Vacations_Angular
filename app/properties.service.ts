import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Properties } from './models/properties.model';

const baseUrl = 'http://localhost:8080/api/tutorials';


@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  constructor(private http: HttpClient) { }

  getProperties() {
    return this.http.get("http://127.0.0.1:8000/bv/pro")
  }
}

