import { Component, OnInit } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { BodyComponent } from './layout/body/body.component';
import { HeaderComponent } from './layout/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';

import { StatusComponent } from './layout/body/status/status.component';
import { ApiService } from './service/api.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [
        SharedModule,
        CommonModule,
        AppRoutingModule,
        BodyComponent,
        HeaderComponent,
        MatSidenavModule,
        StatusComponent
    ],
    providers: [
        ApiService
    ]
})

export class AppComponent implements OnInit {
  public sidenavExpanded: boolean = false;

  ngOnInit(): void {
    console.log('AppComponent: onInit');
  }

}
