export interface ITask {
  taskname: string;
  priority: string;
  category: string;
  date: string;
}

export type SetTaskType = (task: ITask) => void;
