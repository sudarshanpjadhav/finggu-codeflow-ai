import React from 'react';

export class FingguTaskBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
    this.addTask = this.addTask.bind(this);
  }

  addTask(task) {
    this.setState(prevState => ({ tasks: [...prevState.tasks, task] }));
  }

  render() {
    return (
      <div className='finggu-task-board'>
        <h2>Task Board</h2>
        <ul>
          {this.state.tasks.map((task, index) => <li key={index}>{task}</li>)}
        </ul>
        <button onClick={() => this.addTask('New Task')}>Add Task</button>
      </div>
    );
  }
}