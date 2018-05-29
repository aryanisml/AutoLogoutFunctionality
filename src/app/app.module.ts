
import { CommonSampleAppModule } from 'common-sample-app';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { StudyComponent, StudyModule, StudygridComponent } from 'study';
import { LoginModule } from 'projects/login/src/app/app.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MessageComponent } from './message.component';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PopupModule } from '@progress/kendo-angular-popup';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SessionComponent } from './session-component';
import { WindowModule } from '@progress/kendo-angular-dialog';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogModule } from '@progress/kendo-angular-dialog';
import {sampleProducts} from './products';
import { GridModule } from '@progress/kendo-angular-grid';
const routes: Routes = [
  { path: 'app', component: StudyComponent, data: { passdata: sampleProducts } },
  // { path: 'somainapp',loadChildren:'app/so-main/so-main.module#SoMainModule'}
];


@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    SessionComponent
  ],
  imports: [
    BrowserModule,
    CommonSampleAppModule,
    StudyModule,
    LoginModule,
    RouterModule.forRoot(routes),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    NgIdleKeepaliveModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    WindowModule,
    ButtonsModule,
    DialogModule,
    GridModule,
    PopupModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MessageComponent, SessionComponent]
})
export class AppModule { }
