import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { GuideComponent } from './guide/guide.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'guide/:id', component: GuideComponent },
  { path: '', redirectTo: 'search', pathMatch: 'full' }
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule {
}
