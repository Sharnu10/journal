export enum ECategory {
  mins = '2 mins',
  timed = 'timed',
}

export interface ITask {
  task: string;
  priority: string;
  category: ECategory;
  createdDate: Date;
}
