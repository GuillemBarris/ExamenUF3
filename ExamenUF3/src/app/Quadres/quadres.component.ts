import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-quadres',
  templateUrl: './quadres.component.html',
  styleUrls: ['./quadres.component.css']
})
export class QuadresComponent implements OnInit {
 Quadres!: any;

  
  constructor(private appComponent: AppComponent){}
  ngOnInit() {
    this.appComponent.getID().subscribe((data)=>{
    
      this.Quadres = data;
      console.log(this.Quadres);
   
    });
    
  }
  
}
