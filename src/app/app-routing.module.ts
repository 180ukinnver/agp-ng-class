import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { CommunityComponent } from './components/community/community.component';
import { AuthGuard } from './guards/auth.guard';
import { CommunityListComponent } from './components/community-list/community-list.component';
import { CommunityWriteComponent } from './components/community-write/community-write.component';
import { CommunityViewComponent } from './components/community-view/community-view.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { 
    path: 'community', 
    canActivate: [AuthGuard], 
    component: CommunityComponent, 
    children: [
      { path: 'list/:id', component: CommunityListComponent },
      { path: 'write', component: CommunityWriteComponent },
      { path: 'view/:id', component: CommunityViewComponent }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
