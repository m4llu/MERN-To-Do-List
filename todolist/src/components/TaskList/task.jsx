function Task(props) {
    return <div className="task" style={{backgroundColor: props.color}}>
        <h2>{props.title}</h2>
        <p>{props.contents}</p>
    </div>
}

export default Task;