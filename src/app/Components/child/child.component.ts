import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() cNamefromP: any;
  @Output() cdatatoP=new EventEmitter();
  constructor() { }
  show(){
       console.log("it is child component");
     }
  ngOnInit() {
  }
  dataToParent(){
    this.cdatatoP.emit("child to parent");
  }
  // show(){
  //   console.log("it is child component");
  // }

}
