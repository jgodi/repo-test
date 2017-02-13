import { Component } from '@angular/core';
import { SingletonService } from './../services/singleton.service';

@Component({
  selector: 'app-mainframe',
  templateUrl: './mainframe.component.html',
  styleUrls: ['./mainframe.component.scss']
})
export class MainframeComponent {
  constructor(public singleton: SingletonService) { }
}
