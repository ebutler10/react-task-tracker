import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Dec 5th",
      reminder: true,
    },
    {
      id: 2,
      text: "Zoom",
      day: "Dec 12th",
      reminder: true,
    },
    {
      id: 3,
      text: "Trader Joe",
      day: "Dec 10th",
      reminder: false,
    },
  ]);

  //delete task
   const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map())
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
};

export default App;
