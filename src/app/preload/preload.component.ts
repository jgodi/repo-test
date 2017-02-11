import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preload',
  templateUrl: './preload.component.html',
  styleUrls: ['./preload.component.css']
})
export class PreloadComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('PRELOAD LOADING.. AWAITING INSTRUCTION FROM PAGESDK');
    setTimeout(() => {
      console.log('GOING TO RECORD!');
      this.router.navigate(['record']);
    }, 5000);
  }

}
