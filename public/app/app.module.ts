import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { AppComponent } from './app.component';
import { SingletonService } from './services/singleton.service';

export class PreloadSelectedModulesList implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
    return route.data && route.data['preload'] ? load() : Observable.of(null);
  }
}

export const routes: Routes = [
  { path: 'content', loadChildren: './preload/preload.module#PreloadModule' },
  { path: '', loadChildren: './mainframe/mainframe.module#MainframeModule', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadSelectedModulesList })
  ],
  providers: [
    SingletonService,
    PreloadSelectedModulesList
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
