import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { AppComponent } from './app.component';
import { PreloadComponent } from './preload/preload.component';

export class PreloadSelectedModulesList implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
    return route.data && route.data['preload'] ? load() : Observable.of(null);
  }
}

export const routes: Routes = [
  { path: 'preload', component: PreloadComponent },
  { path: '', loadChildren: './mainframe/mainframe.module#MainframeModule', pathMatch: 'full' },
  { path: 'record', loadChildren: './record/record.module#RecordModule', data: { preload: true } }
];

@NgModule({
  declarations: [
    AppComponent,
    PreloadComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadSelectedModulesList })
  ],
  providers: [
    PreloadSelectedModulesList
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
