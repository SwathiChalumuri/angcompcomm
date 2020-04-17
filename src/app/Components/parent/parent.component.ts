import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  Pname="Miracle";
  emitdata;
  

  @ViewChild(ChildComponent, {static: true}) ch: ChildComponent;
  constructor() { }

  ngOnInit() {
  }
  getFromChild(em){
    this.ch.show();
    this.emitdata=em;
  }
  

}
