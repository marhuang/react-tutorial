import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Todo(props) {
  return (
    <div>
      <input type="checkbox"></input>
      <input type="text"></input>
    </div>
  );
}
  
  class Board extends React.Component {

    handleClick(i) {
      }

    create_moretodo(){
      return (
          <div className="todo">
            <Todo />
          </div>
      );
    }
  
    render() {
      return (
        <div>
          <button onclick="create_moretodo()">ADD TODO</button>
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
  