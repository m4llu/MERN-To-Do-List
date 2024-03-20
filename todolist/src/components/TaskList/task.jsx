function Task(props) {
    return <div className="task" style={{backgroundColor: props.color}}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
    </div>
}

export default Task;