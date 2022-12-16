import { Component } from "react";
import { MarkRed } from "./MarkRed";

export class TaskList extends Component {
    state = {
    userTask: '',
    taskList: []
    }

    onChangeEvent(e) {
        this.setState({
            userTask: e
        })
    }

    addTask(input) {
        if(input===""){
            alert("Please add a task")
        }
        else {
            let taskArray = this.state.taskList;
            taskArray.push(input);
            this.setState({userTask:'', taskList: taskArray})
        }
    }

    crossedItem(event) {
        const done = event.target;
        done.classList.toggle('crossed')
    }

    deleteList() {
        let taskArray = this.state.taskList;
        taskArray = [];
        this.setState({taskList:taskArray})
    }  

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.onFormSubmit}>
                <div className="inputContainer">
                <input type="text"
                placeholder="new task"
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userTask}/>
                <button onClick={() => {this.addTask(this.state.userTask)}} className="btnAdd">➕</button>
                </div>
                <ul>
                    {this.state.taskList.map((item, index) => (
                        <div key={index} className="inlineItem">
                             <li onClick={this.crossedItem}>{item}</li> 
                             <div className="btnContainer">
                             <MarkRed/>
                             </div>  
                        </div>
                       
                    ))}
                </ul>
                <div className="deleteContainer">
                    <button onClick={() => this.deleteList()} className="btnDelete">Clean task list</button>
                </div>
                </form>
            </div>
        )
    }
}