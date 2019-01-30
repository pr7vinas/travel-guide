import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuideComponent } from './guide/guide.component';
import { SearchComponent } from './search/search.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { GuidecardComponent } from './guidecard/guidecard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule( {
  declarations: [
    AppComponent,
    GuideComponent,
    SearchComponent,
    GuidecardComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
