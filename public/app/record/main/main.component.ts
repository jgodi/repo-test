import { Component, OnInit } from '@angular/core';
import { SingletonService } from './../../services/singleton.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(public singleton: SingletonService) { }

  ngOnInit() {
    console.log('[Record - Main] - Singleton -', this.singleton.uuid);
  }

}
