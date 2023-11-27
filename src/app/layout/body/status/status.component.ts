import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ApiService } from 'src/app/service/api.service';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ISingleStatus, IStatus } from 'src/app/shared/interfaces/status';
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
  ) { }

  ngOnInit(): void {
    this._apiService.getStatus().subscribe((response: IStatus) => {
      this.statusForm = this.createFormGroup(response);
    })
  }

  /**
   * Creates the form group to be displayed
   * @param data
   */
  createFormGroup(data: IStatus) {
    const group = this._fb.group({
      power: data.power,
      autosource: data.autosource,
      source: data.source,
      blank: data.blank,
      volume: data.volume,
      brightness: data.brightness,
      lamphours: data.lamphours,
      maxlamphours: data.maxlamphours
    })

    return group;
  }

  /**
   * Get up to date value from backend
   * @param route The route to send the request to
   */
  refresh(route: string) {
    this._apiService.get('status/' + route).subscribe((response: ISingleStatus) => {
      this.statusForm.patchValue({ [route]: response.value })
    });
  }

  /**
   * Get up to date values for all properties from backend
   */
  refreshAll() {
    this._apiService.getStatus().subscribe((response: any) => {
      this.statusForm.reset();
      this.statusForm = this.createFormGroup(response);
    });
  }

  /**
   * Send toggle command tp backend
   * @param route The route to send the request to
   */
  sendToggleCommand(route: string, event: MatSlideToggleChange) {
    let action: string = event.checked ? "on" : "off"
    this.sendCommand(route, "/" + action);
  }

  /**
   * Send get request to backend
   * @param route
   */
  sendCommand(route: string, subroute: string) {
    this._apiService.get("commands/" + route + subroute).subscribe((response: ISingleStatus) => {
      this.statusForm.patchValue({ [route]: response.value });
    })
  }
}
