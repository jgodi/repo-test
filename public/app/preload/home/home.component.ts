import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SingletonService } from './../../services/singleton.service';

@Component({
  selector: 'app-preload-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class PreloadHomeComponent implements OnInit, OnDestroy {
  countdown: any;
  timeLeft: number = 5;

  constructor(private router: Router, private route: ActivatedRoute, public singleton: SingletonService) { }

  ngOnInit() {
    console.log('[Preload - Home] - Singleton -', this.singleton.uuid);
    console.log('[Preload - Home] - Waiting 5s before going to Record');
    setTimeout(() => {
      this.router.navigate(['../record'], { relativeTo: this.route });
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
