import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './home/about/about.component';
import { HomeComponent } from './home/home.component';
import { CommentsComponent } from './home/comments/comments.component';

const routes: Routes = [
    {path: '', component: HomeComponent,
    children: [
        { path: '', redirectTo: 'about', pathMatch: 'full' },
        {path: 'about', component: AboutComponent},
        {path: 'comments', component: CommentsComponent}
    ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



