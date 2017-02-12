import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preload',
  templateUrl: './preload.component.html',
  styleUrls: ['./preload.component.scss']
})
export class PreloadComponent implements OnInit, OnDestroy {
  countdown: any;
  timeLeft: number = 5;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('PRELOAD LOADING.. AWAITING INSTRUCTION FROM PAGESDK');
    setTimeout(() => {
      console.log('GOING TO RECORD!');
      this.router.navigate(['record']);
    }, 5000);
    this.countdown = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft === 0) {
        clearInterval(this.countdown);
      }
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.countdown);
  }
}
