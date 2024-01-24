// api/service.js
import axios from 'axios';

const loginUser = async (username, password) => {
  try {
    const response = await axios.post('http://localhost:3005/auth/login', { email:username,password: password });
    return response.data; 
  } catch (error) {
    throw new Error('Error occurred while logging in');
  }
};

const addTask = async (addTaskRequest) => {
    try {
      const response = await axios.post('http://localhost:3005/tasks/add', { 
      ...addTaskRequest
    });
      return response.data; 
    } catch (error) {
      throw new Error('Error occurred while adding a task');
    }
  }; 

  const deleteTask = async (taskId) => {
    try {
      const response = await axios.delete(`http://localhost:3005/tasks/delete/${taskId}`);
      return response.data; 
    } catch (error) {
      throw new Error('Error occurred while deleting a task');
    }
  }; 

const getTaskList = async (userID) => {
    try {
      const response = await axios.get(`http://localhost:3005/tasks/user/${userID}`);
      return response.data; 
    } catch (error) {
      throw new Error('Error occurred in get task list');
    }
  };    

export { loginUser,addTask,deleteTask,getTaskList};
