import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ApiService } from 'src/app/service/api.service';
import { FormArray, UntypedFormArray, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { IStatus, State } from 'src/app/service/interfaces/status';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
  standalone: true,
  imports: [
    SharedModule
  ]
})




export class StatusComponent implements OnInit {

  //statusForm: UntypedFormArray = new UntypedFormArray([]);
  statusForm: UntypedFormGroup = new UntypedFormGroup({});

  public displayedColumns: string[] = ['description', 'value', 'refresh'];

  constructor(
    private _fb: UntypedFormBuilder,
    private _apiService: ApiService
  ) {

  }

  ngOnInit(): void {
    this._apiService.getStatus().subscribe((response: IStatus) => {
      console.log(response);
      this.statusForm = this.createFormGroup(response);
      console.log(this.statusForm);
    })
  }


  createFormGroup(data: IStatus) {
    const group = this._fb.group({
      power: State[data.power],
      autosource: State[data.autosource],
      source: data.source,
      blank: State[data.blank],
      volume: data.volume,
      lamphours: data.lamphours,
      maxlamphours: data.maxlamphours
    })

    return group;
  }

  refresh(route: string) {
    this._apiService.get('status/' + route).subscribe((response: any) => {
      console.log(response);
      this.statusForm.reset();
      this.statusForm = this.createFormGroup(response);
      console.log(this.statusForm);
    });
  }

  refreshAll() {
    this._apiService.getStatus().subscribe((response: any) => {
      this.statusForm.reset();
      this.statusForm = this.createFormGroup(response);
    });
  }

  sendToggleCommand(route: string, event: MatSlideToggleChange) {
    let action: string = event.checked ? "on" : "off"
    this.sendCommand(route + "/" + action);
  }

  sendCommand(route: string) {
    this._apiService.get(route).subscribe((response: any) => {
      console.log("response" + response);
    })
  }
}
