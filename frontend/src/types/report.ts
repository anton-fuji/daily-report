export interface Report {
  id: string;
  date: string;
  todayWork: string;
  tomorrowPlan: string;
  memo: string;
  createdAt: string;
  updatedAt: string;
}

export type ReportInput = Omit<Report, 'id' | 'createdAt' | 'updatedAt'>;
