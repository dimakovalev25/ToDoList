import React from "react";

type PropsType = {
    title: string
}

function ToDoList(props: PropsType) {
    // console.log(title)
    return (
        <div>
            <h1>{props.title}</h1>
            <ul>
                <li><input type="checkbox" /><span>CSS & HTML</span></li>
                <li><input type="checkbox" /><span>JS</span></li>
                <li><input type="checkbox" /><span>React</span></li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}

export default ToDoList;