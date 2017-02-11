import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainframeComponent } from './mainframe/mainframe.component';
import { RecordComponent } from './record/record.component';
import { MainComponent } from './record/main/main.component';
import { OverviewComponent } from './record/overview/overview.component';
import { PreloadComponent } from './preload/preload.component';

export const routes: Routes = [
  { path: '', redirectTo: 'mainframe', pathMatch: 'full' },
  { path: 'mainframe', component: MainframeComponent },
  { path: 'preload', component: PreloadComponent },
  {
    path: 'record',
    component: RecordComponent,
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', component: MainComponent },
      { path: 'overview', component: OverviewComponent }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MainframeComponent,
    RecordComponent,
    MainComponent,
    OverviewComponent,
    PreloadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
