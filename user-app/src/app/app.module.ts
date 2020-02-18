import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { TestComponent } from './test/test.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms'
import { UserDetailComponent } from './user-detail/user-detail.component';
import { NavComponent } from './nav/nav.component';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'users/new',
    pathMatch: 'full',
    component: UserDetailComponent
  },
  {
    path: 'users/:id/edit',
    component: UserDetailComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    TestComponent,
    UserDetailComponent,
    NavComponent,
    ModalBasicComponent
  ],
  imports: [
    BrowserModule, FormsModule, FontAwesomeModule, NgbModule, RouterModule.forRoot(routes),
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
