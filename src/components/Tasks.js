const tasks = [
    {
        id: 1,
        text: "go to doc",
        day: "today",
        reminder: true,
    },
    {
        id: 2,
        text: "pick uo food",
        day: "today",
        reminder: true,
    },
    {
        id: 3,
        text: "christmas",
        day: "friday",
        reminder: true,
    }
]

const Tasks = () => {
    return (
        <>
          {tasks.map((task) => (<h3>{task.text}</h3>))}  
        </>
    )
}

export default Tasks
