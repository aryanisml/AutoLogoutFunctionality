import { NgModule } from '@angular/core';
import { CommonSampleAppComponent } from './common-sample-app.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonSampleLoginComponent } from './common-sample-login.component';

const routes: Routes = [
  { path: '', component: CommonSampleLoginComponent },
  // { path: 'somainapp',loadChildren:'app/so-main/so-main.module#SoMainModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [CommonSampleAppComponent, CommonSampleLoginComponent],
  exports: [CommonSampleAppComponent, CommonSampleLoginComponent]
})
export class CommonSampleAppModule { }
