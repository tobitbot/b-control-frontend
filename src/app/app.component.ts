import { Component, OnInit } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { BodyComponent } from './layout/body/body.component';
import { HeaderComponent } from './layout/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StatusComponent } from './layout/body/status/status.component';
import { ControlComponent } from './layout/body/control/control.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    SharedModule,
    CommonModule,
    AppRoutingModule,
    BodyComponent,
    HeaderComponent,
    MatSidenavModule,
    StatusComponent,
    ControlComponent
  ]
})

export class AppComponent implements OnInit {
  public sidenavExpanded: boolean = false;

  ngOnInit(): void {
    console.log('AppComponent: onInit');
  }

}
