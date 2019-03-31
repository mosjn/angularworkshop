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
    pCost : 200,
    img:"https://www.watsons.co.th/medias/sys_master/front/zoom/8910304641054.jpg"
  },
  {
    pId : "002",
    pName : "แก้วน้ำ",
    pCost : 10,
    img:"../assets/img/แก้ว.jpg"
  },
  {
    pId : "003",
    pName : "ยาสีฟัน",
    pCost : 20,
    img:"https://media.shopat24.com/pdmain/840227_020_AM_01.jpg"
  },
]
selectedProduct :any;

selectProduct(p){
  this.selectedProduct = p;
}
constructor (){

}
} 

