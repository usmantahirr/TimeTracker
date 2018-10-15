export interface TimesheetDay {
  standartime: number;
  overtime: number;
  doubletime: number;
}

export interface Timesheet {
  _id: string;
  weekNumber: number;
  monday: TimesheetDay;
  tuesday: TimesheetDay;
  wednesday: TimesheetDay;
  thursday: TimesheetDay;
  friday: TimesheetDay;
  saturday: TimesheetDay;
  sunday: TimesheetDay;
}
