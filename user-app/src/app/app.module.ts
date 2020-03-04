import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFileAlt as farFileAlt, faEdit as farEdit, faTrashAlt as farTrashAlt } from '@fortawesome/free-regular-svg-icons';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { TestComponent } from './test/test.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms'
import { UserDetailComponent } from './user-detail/user-detail.component';
import { NavComponent } from './nav/nav.component';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import { UserDataComponent } from './user-data/user-data.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModuleModule } from './routing-module.module';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    TestComponent,
    UserDetailComponent,
    NavComponent,
    ModalBasicComponent,
    UserDataComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule,
    RoutingModuleModule
  ],
  providers: [UserService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(farFileAlt, farEdit, farTrashAlt);
    console.log("Library: "+library);
  }
}
