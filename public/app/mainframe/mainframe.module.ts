import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NovoElementsModule, NovoElementProviders, FormUtils, NovoLabelService } from 'novo-elements';

import { MainframeComponent } from './mainframe.component';

export const routes: Routes = [
  { path: '', component: MainframeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild(routes),
    NovoElementsModule,
    NovoElementProviders.forRoot(),
  ],
  declarations: [
    MainframeComponent
  ]
})
export class MainframeModule { }

console.log('[Mainframe] - Module Loaded');
