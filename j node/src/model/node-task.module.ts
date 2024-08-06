
  
  export interface ITask {
    task: string;
    priority: string;
    category:  string[];
    createdDate: Date;
  }
  
  export interface ICard {
    headerText: string;
    priority: string;
    title: string;
    category: string[];
    description: string;
  }