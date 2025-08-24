import { Component } from '@angular/core';
import { StatusComponent } from './status/status.component';
import { SharedModule } from 'src/app/shared/shared.module';


@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.scss'],
    imports: [
        StatusComponent,
        SharedModule
    ]
})
export class BodyComponent {

}
