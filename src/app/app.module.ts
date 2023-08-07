import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './landpage/home/home.component';
import { ContactComponent } from './landpage/contact/contact.component';
import { FindabranchComponent } from './landpage/findabranch/findabranch.component';
import { PartnerComponent } from './landpage/partner/partner.component';
import { QuestionComponent } from './landpage/question/question.component';
import { AccountStateComponent } from './user/account-state/account-state.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserNoticeComponent } from './user/user-notice/user-notice.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserTransferComponent } from './user/user-transfer/user-transfer.component';
import { AllAcctComponent } from './admin/all-acct/all-acct.component';
import { FeedBackComponent } from './admin/feed-back/feed-back.component';
import { NewAcctComponent } from './admin/new-acct/new-acct.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    FindabranchComponent,
    PartnerComponent,
    QuestionComponent,
    AccountStateComponent,
    UserHomeComponent,
    UserRegisterComponent,
    UserNoticeComponent,
    UserProfileComponent,
    UserTransferComponent,
    AllAcctComponent,
    FeedBackComponent,
    NewAcctComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
