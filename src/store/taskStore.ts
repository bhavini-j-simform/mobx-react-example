import axios from "axios";
import { action, computed, makeObservable, observable } from "mobx";
import { IRootStore } from "./RootStore";

export interface ITaskList {
  _id?: string;
  userId: string;
  taskName: string;
  description: string;
  status:string;
}

export class TaskStore {
  rootStore: IRootStore;
  taskList: ITaskList[] = [];
 
  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      taskList: observable,
      fetchAllTasks: action,
      addTask:action,
      getTaskList: computed,
    });
    this.rootStore = rootStore;
  }

  async fetchAllTasks() {
    const userId = this.rootStore.loginStore.getUserDetails?._id;
    const response = await axios.get(`http://localhost:3005/tasks/user/${userId?.toString()}`);
    this.taskList = response?.data?.tasks;
  }

  async addTask(addTaskRequest:ITaskList){
    const response = await axios.post('http://localhost:3005/tasks/add', { 
      ...addTaskRequest
    });
  }

  async deleteTask(id:string){
    const response = await axios.delete(`http://localhost:3005/tasks/delete/${id}`);
    if(response?.data)
    await this.fetchAllTasks();
  }

  get getTaskList() {
    return this.taskList;
  }

}
