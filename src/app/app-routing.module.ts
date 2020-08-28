import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { CommunityComponent } from './components/community/community.component';

const routes: Routes = [
  { path: '', redirectTo: '/content', pathMatch: 'full' },
  { path: 'content', component: ContentComponent },
  { path: 'community', component: CommunityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
