import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingletonService } from './../services/singleton.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {
  // Hide header (checked via query param)
  hideHeader: boolean = false;

  constructor(route: ActivatedRoute, public singleton: SingletonService) {
    this.hideHeader = !!route.snapshot.queryParams['hideHeader'];
  }

  ngOnInit() {
  }

}
