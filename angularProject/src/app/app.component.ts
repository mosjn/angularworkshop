import { Component } from '@angular/core';
import { CommonServiceService } from './common-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 request = {
   key1:50,
   key2:10
 }
 result : any 
 constructor(private service: CommonServiceService){
  this.getData();
 }
 getData(){
   this.service.getData(this.request).subscribe((response) => {
     console.log(response);
     this.result=response
   });
 }
} 

