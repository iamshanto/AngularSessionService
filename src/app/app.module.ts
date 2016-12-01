import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GroupAComponent } from './group-a/group-a.component';
import { GroupBComponent } from './group-b/group-b.component';
import { TeamAComponent } from './group-a/team-a/team-a.component';
import { TeamBComponent } from './group-a/team-b/team-b.component';
import { TeamCComponent } from './group-b/team-c/team-c.component';
import { TeamDComponent } from './group-b/team-d/team-d.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupAComponent,
    GroupBComponent,
    TeamAComponent,
    TeamBComponent,
    TeamCComponent,
    TeamDComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
