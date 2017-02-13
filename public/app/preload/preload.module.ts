import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PreloadComponent } from './preload.component';
import { PreloadHomeComponent } from './home/home.component';


export const routes: Routes = [
  { path: '', redirectTo: 'routes', pathMatch: 'full' },
  {
    path: 'routes',
    component: PreloadComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: PreloadHomeComponent },
      { path: 'record', loadChildren: './../record/record.module#RecordModule', data: { preload: true } }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PreloadComponent,
    PreloadHomeComponent
  ]
})
export class PreloadModule { }

console.log('[Preload] - Module Loaded');
