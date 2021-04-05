import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DatabaseComponent } from './database/database.component';
import { MissionComponent } from './mission/mission.component';
import { ParticipantComponent } from './participant/participant.component';
import { PartnerComponent } from './partner/partner.component';
import { AdditivesComponent } from './additives/additives.component';
import { ExamplesComponent } from './examples/examples.component';
import { ToolboxComponent } from './toolbox/toolbox.component';

const routes: Routes = [
  {path: 'home' , component: HomeComponent},
  {path: 'database' , component: DatabaseComponent},
  {path: 'mission' , component: MissionComponent},
  {path: 'participant' , component: ParticipantComponent},
  {path: 'partners' , component: PartnerComponent},
  {path: 'additives' , component: AdditivesComponent},
  {path: 'examples' , component: ExamplesComponent},
  {path: 'toolbox' , component: ToolboxComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
