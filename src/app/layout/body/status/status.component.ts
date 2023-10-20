import { Component } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

export interface StatusData {
  property: string;
  status: number;
  param: string;
}

const ELEMENT_DATA: StatusData[] = [
  { property: 'Hydrogen', status: 1.0079, param: 'H' },
  { property: 'Helium', status: 4.0026, param: 'He' },
  { property: 'Lithium', status: 6.941, param: 'Li' },
  { property: 'Beryllium', status: 9.0122, param: 'Be' },
  { property: 'Boron', status: 10.811, param: 'B' },
  { property: 'Carbon', status: 12.0107, param: 'C' },
  { property: 'Nitrogen', status: 14.0067, param: 'N' },
  { property: 'Oxygen', status: 15.9994, param: 'O' },
  { property: 'Fluorine', status: 18.9984, param: 'F' },
  { property: 'Neon', status: 20.1797, param: 'Ne' },
  { property: 'Nitrogen', status: 14.0067, param: 'N' },
  { property: 'Oxygen', status: 15.9994, param: 'O' },
  { property: 'Fluorine', status: 18.9984, param: 'F' },
  { property: 'Neon', status: 20.1797, param: 'Ne' },
  { property: 'Nitrogen', status: 14.0067, param: 'N' },
  { property: 'Oxygen', status: 15.9994, param: 'O' },
  { property: 'Fluorine', status: 18.9984, param: 'F' },
  { property: 'Neon', status: 20.1797, param: 'Ne' },
];

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
  standalone: true,
  imports: [
    SharedModule
  ]
})
export class StatusComponent {

  public displayedColumns: string[] = ['property', 'status', 'param'];
  public dataSource = ELEMENT_DATA;

  getData(data: StatusData) {
    console.log(data);
    // Send request here
  }
}
