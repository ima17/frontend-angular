import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HomeComponent } from './home/home.component';
import { DatabaseComponent } from './database/database.component';
import { MissionComponent } from './mission/mission.component';
import { ParticipantComponent } from './participant/participant.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { AdditivesComponent } from './additives/additives.component';
import { ExamplesComponent } from './examples/examples.component';
import { PartnerComponent } from './partner/partner.component';
import { StartdiscussionComponent } from './startdiscussion/startdiscussion.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DatabaseComponent,
    MissionComponent,
    ParticipantComponent,
    ToolboxComponent,
    AdditivesComponent,
    ExamplesComponent,
    PartnerComponent,
    StartdiscussionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatCheckboxModule   
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
