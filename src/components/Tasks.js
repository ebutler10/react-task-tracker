const tasks = [
    {
        id: 1,
        text: "get railed",
        day: "today",
        reminder: true,
    },
    {
        id: 2,
        text: "get ze kitty licked",
        day: "today",
        reminder: true,
    },
    {
        id: 3,
        text: "railed pt 2",
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
