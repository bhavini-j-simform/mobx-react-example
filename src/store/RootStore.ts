import { LoginStore } from "./loginStore";
import { TaskStore } from "./taskStore";

export interface IRootStore {
  loginStore: LoginStore;
  taskStore:TaskStore;
}

export class RootStore implements IRootStore {
  loginStore: LoginStore;
  taskStore: TaskStore;

  constructor() {
    this.loginStore = new LoginStore(this);
    this.taskStore = new TaskStore(this);
  }
}
