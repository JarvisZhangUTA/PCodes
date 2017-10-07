import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { DataService } from './services/data/data.service';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';
import { routing } from './app.routes';
import { NewProblemComponent } from './components/new-problem/new-problem.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AuthService} from './services/auth/auth.service';
import { MenuComponent } from './components/menu/menu.component';
import { CallbackComponent } from './components/callback/callback.component';
import {CollaborateService} from './services/collaborate/collaborate.service';
import { RoomListComponent } from './components/room-list/room-list.component';
import { RoomDetailComponent } from './components/room-detail/room-detail.component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

@NgModule({
  declarations: [
    AppComponent,
    ProblemListComponent,
    ProblemDetailComponent,
    NewProblemComponent,
    MenuComponent,
    CallbackComponent,
    RoomListComponent,
    RoomDetailComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    routing,
    AngularFontAwesomeModule,
    FormsModule,
    Ng4LoadingSpinnerModule
  ],
  providers: [
    DataService,
    AuthService,
    CollaborateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
