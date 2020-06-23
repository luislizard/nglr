import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinksListComponent } from './links/links-list/links-list.component';
import { CreateLinkComponent } from './links/create-link/create-link.component';
import { RedirectLinkComponent } from './links/redirect-link/redirect-link.component';


const routes: Routes = [
  { path: '', component: LinksListComponent},
  { path: 'add', component: CreateLinkComponent},
  { path: ':id', component: RedirectLinkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
