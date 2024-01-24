import { observer } from "mobx-react-lite";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../Hooks/useStore";

export const AddTask = observer(() => {
  const {
    rootStore: { loginStore,taskStore },
  } = useStore();

  const navigate = useNavigate();

  const [taskData, setTaskData] = useState({
    taskName: "",
    description: "",
    status: "Pending",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>|ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const onSubmit = async () => {
    await  taskStore.addTask({
        userId:loginStore?.getUserDetails?._id?.toString()||'',
        taskName: taskData.taskName,
        description: taskData.description,
        status: taskData.status,
      });
    navigate("/taskList");
  };

  return (
    <div className="container text-md-start">
      <main>
        <h3>Add Task</h3>
        <form>
          <div className="row g-3 mb-3">
            <div className="col-sm-6">
              <label htmlFor="taskName" className="form-label">
                Task Name
              </label>
              <input
                type="text"
                className="form-control"
                id="taskName"
                name="taskName"
                value={taskData.taskName}
                onChange={handleChange}
                placeholder="Task Name"
                required
              />
            </div>
          </div>
          <div className="row g-3 mb-3">
            <div className="col-sm-6">
              <label htmlFor="taskDescription" className="form-label">
                Task Description
              </label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={taskData.description}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="row g-3 mb-3">
            <div className="col-sm-6">
              <label htmlFor="taskStatus" className="form-label">
                Task Status
              </label>
              <select className="form-select" aria-label="task status"
               name='status'
               value={taskData.status}
               onChange={handleChange}>
                <option selected value="">
                  Task Status
                </option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>
          <div className="row g-3 mb-3">
            <div className="col-sm-6">
              <button type="button" className="btn btn-primary" onClick={onSubmit}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
});
