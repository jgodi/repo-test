import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RecordComponent } from './record.component';
import { MainComponent } from './main/main.component';
import { OverviewComponent } from './overview/overview.component';

export const routes: Routes = [
  { path: '', redirectTo: 'routes', pathMatch: 'full' },
  {
    path: 'routes',
    component: RecordComponent,
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', component: MainComponent },
      { path: 'overview', component: OverviewComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    RecordComponent,
    MainComponent,
    OverviewComponent
  ]
})
export class RecordModule { }

console.log('[Record] - Module Loaded');
