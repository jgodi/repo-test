import { Component } from '@angular/core';
import { SingletonService } from './../services/singleton.service';

@Component({
  selector: 'app-preload',
  templateUrl: './preload.component.html',
  styleUrls: ['./preload.component.scss']
})
export class PreloadComponent {

  constructor(public singleton: SingletonService) {
    console.log('[Preload] - Singleton - ', this.singleton.uuid);
    setInterval(() => {
      this.singleton.count++;
    }, 1000);
  }
}
