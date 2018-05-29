import { NgModule } from '@angular/core';
import { StudyComponent } from './study.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { StudygridComponent } from './studygrid/studygrid.component';
import { Routes, RouterModule } from '@angular/router';
import { sampleProducts } from './products';
import { StudycreateComponent } from './studycreate/studycreate.component';

const routes: Routes = [
  {
    path: 'app', component: StudyComponent,
    children: [
      {
        path: 'study',
        component: StudygridComponent,
        data: {
          passdata: sampleProducts
        }
      }, {
        path: '',
        redirectTo: 'study',
        pathMatch: 'full'
      },
      {
        path: 'create',
        component: StudycreateComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    GridModule,
    RouterModule
  ],
  declarations: [StudyComponent, StudygridComponent, StudycreateComponent],
  exports: [StudyComponent]
})
export class StudyModule { }
