import { Component } from '@angular/core';
import { StatusComponent } from './status/status.component';
import { ControlComponent } from './control/control.component';
import { SharedModule } from 'src/app/shared/shared.module';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  standalone: true,
  imports: [
    StatusComponent,
    ControlComponent,
    SharedModule
  ]
})
export class BodyComponent {

}
