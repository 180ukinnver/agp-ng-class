import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { TextColorDirective } from './directives/text-color.directive';
import { ReversePipe } from './pipes/reverse.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ModalTemplateComponent } from './components/modal-template/modal-template.component';
import { SignModalComponent } from './components/sign-modal/sign-modal.component';
import { CommunityComponent } from './components/community/community.component';
import { CommunityListComponent } from './components/community-list/community-list.component';
import { CommunityWriteComponent } from './components/community-write/community-write.component';
import { CommunityViewComponent } from './components/community-view/community-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    TextColorDirective,
    ReversePipe,
    ModalTemplateComponent,
    SignModalComponent,
    CommunityComponent,
    CommunityListComponent,
    CommunityWriteComponent,
    CommunityViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
