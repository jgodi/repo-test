import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainframe',
  templateUrl: './mainframe.component.html',
  styleUrls: ['./mainframe.component.scss']
})
export class MainframeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('MAINFRAME LOADED!!!');
  }

}
