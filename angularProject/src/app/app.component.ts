import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productList = [{
    pId : "001",
    pName : "แปรงสีฟัน",
    pCost : 200
  },
  {
    pId : "002",
    pName : "แก้วน้ำ",
    pCost : 10
  },
  {
    pId : "003",
    pName : "ยาสีฟัน",
    pCost : 20
  },
]
selectedProduct :any;

selectProduct(p){
  this.selectedProduct = p;
}
constructor (){

}
} 

