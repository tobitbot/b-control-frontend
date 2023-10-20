import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule]
})

export class HeaderComponent implements OnInit {

  @Input() sidenavExpanded: boolean = false;

  ngOnInit(): void {
    console.log("Header: onInit");
  }

  toggleSidenav() {
    this.sidenavExpanded = !this.sidenavExpanded;
    console.log("show sidenav: " + this.sidenavExpanded);
  }

}
