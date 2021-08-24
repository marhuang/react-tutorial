import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Todo(props) {
  //Checkbox is checked?
  //Save text list

  /*
  {data = [{task,done},...]}
  {
    'task': 'blah',
    'done': bool
  }
  */
  return (
    <div>
      <input checked={props.done} type="checkbox"></input>
      <input type="text" value={props.task}></input>
      <input type="text" value="BLAH"></input>
    </div>
  );
}
  
  class Board extends React.Component {
    constructor(props) {
      super(props);
      // This binding is necessary to make `this` work in the callback
      this.createTODOitems = this.createTODOitems.bind(this);
      this.state = {
        isClicked: false,
        tasks: [{task: "HLELO", done: true}]
      };
    }

    createTODOitems(){
      console.log("IVE BEENN CLICKED");
      this.setState({
        isClicked: true,
      });
      // best practice for updating state?
      this.state.tasks.push({task: null, done: false});
    }

    render() {
      const todoItems = this.state.tasks.map((task) =>
        <Todo task={task.task} done={task.done}/>
      );
      console.log(this.state);

      return (
        <div>
          <button onClick={this.createTODOitems}>ADD TODO</button>
          {todoItems}
        </div>
      );
    }
  }
  
  class TODOList extends React.Component {
    render() {
      return (
        <div className="todolist">
          <div className="todolistitems">
            <Board />
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <TODOList />,
    document.getElementById('root')
  );
  