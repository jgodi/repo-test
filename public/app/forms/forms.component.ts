import { Component, OnInit } from '@angular/core';
import { SingletonService } from './../services/singleton.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  constructor(public singleton: SingletonService) { }

  ngOnInit() {
    console.log('[Record - Overview] - Singleton -', this.singleton.uuid);
  }

}
