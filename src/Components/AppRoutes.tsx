import { Routes, Route, Navigate } from "react-router-dom";
import { AddTask } from "./AddTask";
import { Login } from "./Login";
import { TaskList } from "./TaskList";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/addTask" element={<AddTask />} />
      <Route path="/taskList" element={<TaskList />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
