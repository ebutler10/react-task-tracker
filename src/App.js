import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Dec 5th',
        reminder: true,
    },
    {
        id: 2,
        text: 'Zoom',
        day: 'Dec 12th',
        reminder: true,
    },
    {
        id: 3,
        text: 'Trader Joe',
        day: 'Dec 10th',
        reminder: false,
    },
])

  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
