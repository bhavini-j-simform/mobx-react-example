import { observer } from "mobx-react-lite";
import { useEffect} from "react";
import { useStore } from "../Hooks/useStore";
import { ITaskList } from "../store/taskStore";

export const TaskList = observer(() => {
  const {
    rootStore: { taskStore },
  } = useStore();

  useEffect(()=>{
    taskStore.fetchAllTasks();
  },[]);

  const deleteTask=(id:string)=>{
   taskStore?.deleteTask(id);
  };

  return (
    <div className="container text-md-start">
      <main>
        <h3>Task List</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Task Name</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {taskStore?.getTaskList?.map((task:ITaskList,key:number)=>{
              return(
                <tr>
                <th scope="row">{key+1}</th>
                <td>{task?.taskName}</td>
                <td>{task?.description}</td>
                <td>{task?.status}</td>
                <td>
                  <button type="button" className="btn btn-danger"
                   data-toggle="modal" data-target="#exampleModal"
                   onClick={()=>{deleteTask(task?._id||'')}} >
                    <i className="bi bi-trash"></i> Delete
                  </button>
                </td>
              </tr>
              )
            })}
          
          </tbody>
        </table>
      </main>
   </div>
  );
});
