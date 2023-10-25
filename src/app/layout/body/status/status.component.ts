import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ApiService } from 'src/app/service/api.service';
import { FormArray, UntypedFormArray, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { IStatus, IPropery, State } from 'src/app/service/interfaces/status';

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

  statusForm: UntypedFormArray = new UntypedFormArray([]);
  statusFormData: IStatus = [];

  public displayedColumns: string[] = ['description', 'value', 'refresh'];

  constructor(
    private _fb: UntypedFormBuilder,
    private _apiService: ApiService
  ) {

  }

  ngOnInit(): void {
    this._apiService.getStatus().subscribe((status: IStatus) => {
      this.statusFormData = status;
      this.statusForm = this.createForm(status);
    })
  }

  createFormGroup(status: IPropery) {
    const group = this._fb.group({
      description: status.description,
      value: status.value,
      param: status.param
    })

    return group;
  }

  createForm(status: IStatus): UntypedFormArray {
    return this._fb.array(status.map((item) => this.createFormGroup(item)))
  }

  /**
   * Merges the given new data into the original data
   *
   * @param originalData
   * @param newData
   */
  mergeData(originalData: IPropery, newData: IPropery) {
    let index: number = this.statusFormData.findIndex((item) => item.description == newData.description)
    if (index > 0 && index <= this.statusForm.length) {
      this.statusForm.at(index).patchValue(newData);
    }
  }

  refresh(data: IPropery) {
    this._apiService.get("idk").subscribe((response: IPropery) => {
      this.mergeData(data, response);
    });
  }

  refreshAll() {
    this._apiService.getStatus().subscribe((response: IPropery) => {
      this.statusForm.setValue([response])
    });
  }

  //sendCommand() {
  //  this._apiService.post("commands/power/on", )
  //}

}
