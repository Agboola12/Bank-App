import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllAcctComponent } from './admin/all-acct/all-acct.component';
import { FeedBackComponent } from './admin/feed-back/feed-back.component';
import { NewAcctComponent } from './admin/new-acct/new-acct.component';
import { ContactComponent } from './landpage/contact/contact.component';
import { FindabranchComponent } from './landpage/findabranch/findabranch.component';
import { HomeComponent } from './landpage/home/home.component';
import { PartnerComponent } from './landpage/partner/partner.component';
import { QuestionComponent } from './landpage/question/question.component';
import { AccountStateComponent } from './user/account-state/account-state.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { UserNoticeComponent } from './user/user-notice/user-notice.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserTransferComponent } from './user/user-transfer/user-transfer.component';

const routes: Routes = [
  {path:'', redirectTo:"/home", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"contact", component:ContactComponent},
  {path:"findabranch", component:FindabranchComponent},
  {path:"partner", component:PartnerComponent},
  {path:"question", component:QuestionComponent},
  {path:"account-state", component: AccountStateComponent},
  {path:"user-home", component:UserHomeComponent},
  {path:"user-notice", component:UserNoticeComponent},
  {path:"user-profile", component:UserProfileComponent},
  {path:"user-register", component:UserRegisterComponent},
  {path:"user-transfer", component:UserTransferComponent},
  {path:"all-acct", component: AllAcctComponent},
  {path:"feed-back", component: FeedBackComponent },
  {path:"new-acct", component: NewAcctComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
