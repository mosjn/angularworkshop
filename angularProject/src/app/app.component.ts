import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularProject';
  score: number = 49;
  name: string = "Mo";
  
  student : any = {
    studentId : "5921602779",
    name : " MO ",
    weight : 53,
    hight : 159
  }
  studentList : any =[
  {
    name : " Pang ",
    studentId : "5921602612",
    weight : 40,
    hight : 150
  },
  {
    name : " June ",
    studentId : "5921602485",
    weight : 55,
    hight : 175
  },
  ];
  constructor(){
    this.student.bmi = (this.student.weight/
      ((this.student.hight/100)*(this.student.hight/100))).toFixed(2);
      this.studentList.map((object,index)=>{
          let obj : any = object;
          obj.bmi = (object.weight/((object.hight/100)*(object.hight/100))).toFixed(2);
          return obj;
      })
    console.log(this.studentList);
   // console.log(this.studentList);
 // this.studentList.map((object,index)=>{
   // console.log(object);
   // console.log(index);
   // let obj: any = object;
//obj.bmi = object.weight/((object.hight/100)*(object.hight/100))
   // return obj;
  //})
    
  }
} 

