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
 result : any; 
 userDetail: any={
   id:"",
   name:""
 } 
noteDetail : any = [];
studentId = "5721602287";
getUserDetail(){
  let request = {
    id: this.studentId
  }
  this.service.getUserDetail(request).subscribe((response: any)=>{
    console.log(response);

    this.userDetail = response.user[0]
    this.noteDetail = response.noteDetail[0].note_type
    console.log(this.userDetail,this.noteDetail);
  });
    
}
 constructor(private service: CommonServiceService){
  //this.getData();
  this.getUserDetail();
 }
 errorMsg="";
 updateNoteName(){
   let request = {
     id : this.userDetail.id,
     noteId : Number(this.editNoteDetail.note_id),
     name : this.editNoteDetail.name
   }
   this.service.updateNoteName(request).subscribe((response: any)=>{
     if(response.success){
       this.errorMsg ="แก้ไขสำเร็จ"
       this.getUserDetail();
     }else{
       this.errorMsg = ''
     }
     setTimeout(()=>{
       this.errorMsg = ''
     },2000)
   });
 }
 editNoteDetail :any={
  note_id:"",
  name:""
 }
 getData(){
   this.service.getData(this.request).subscribe((response: any) => {
     console.log(response);
     this.result=response.sum
   });
 }
 
 listDetail: any = [];
 selectNote(list)  {
   this.listDetail = list
   console.log(this.listDetail);
 }
 editNote(note){
   this.service.updateNoteName(note).subscribe((response: any) => {
    console.log(note);
    this.editNoteDetail = JSON.parse(
      JSON.stringify(note))
   })
  console.log(note);
  this.editNoteDetail = note;
 }
} 

