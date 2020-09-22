import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { ConceptComponent } from './concept/concept.component';
import { TeamComponent } from './team/team.component';


const routes: Routes = [
  {path:'home',component:  HomeComponent},
  {path:'book',component:  BookComponent},
  {path:'concept',component:  ConceptComponent},
  {path:'team',component:  TeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
