import { Component, OnInit } from '@angular/core';
import { SingletonService } from './../../services/singleton.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(public singleton: SingletonService) { }

  ngOnInit() {
    console.log('[Record - Overview] - Singleton -', this.singleton.uuid);
  }

}
