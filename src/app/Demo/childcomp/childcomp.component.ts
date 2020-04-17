import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-childcomp',
  templateUrl: './childcomp.component.html',
  styleUrls: ['./childcomp.component.css']
})
export class ChildcompComponent implements OnInit {
 @Input() childVar;
//  @Output() childout = new EventEmitter();
  constructor() {
   }

  ngOnInit() {
    console.log(this.childVar);
  }
  
}
