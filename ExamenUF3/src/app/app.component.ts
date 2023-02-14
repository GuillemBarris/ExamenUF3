import { HttpClient, } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExamenUF3';
  constructor(private httpClient: HttpClient) { }
 public getID(){
  
  return this.httpClient.get("https://api.artic.edu/api/v1/artworks");
 }
}
