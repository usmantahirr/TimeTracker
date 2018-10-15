import { Timesheet } from './timesheet.interface';

export interface Invoice {
  _id: string;
  timesheet: Timesheet;
}
