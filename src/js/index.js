//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';

//include bootstrap npm library into the bundle
import 'bootstrap';

//include your index.scss file into the bundle
import '../styles/index.scss';

//import your own components

import PropTypes from 'prop-types';


class Item extends React.Component {
  constructor(props) {
    super(props);
  }
  
  
  render() {
  let completedList = 'card completedListStyle';
  completedList += this.props.done ? 'card completedListStyle' : 'card ListStyle';
    return (
        <div className= {completedList} onClick={this.props.onClickItem}>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{this.props.value}<i className="fas fa-times float-right" onClick={this.props.onClickRemove}></i></li>
            </ul>
        </div>
    );
  }
}

Item.propTypes = {
   done: PropTypes.bool,
   onClickItem: PropTypes.function,
   value: PropTypes.string,
   onClickRemove: PropTypes.function

};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { value: 'Make the bed', done: false},
        { value:'Wash my hands', done: false },
        { value:'Eat', done: false },
        { value:'Walk the dog', done: false }
    ],
      value: ''
    };
  }

  addItem(e) {
    e.preventDefault();
    let todos = this.state.todos;
    
    if (this.state.value.length != 0) {
      todos.push({
        value: this.state.value,
        done: false
      });
      
      this.setState({todos: todos, value: ''});
    }
    return false;
  }

  removeItem(item) {
    this.state.todos.splice(item, 1);
    this.setState({
      todos: this.state.todos
    });
  }

  markCompleted(item) {
    let todos = this.state.todos;
    let todo = this.state.todos[item];
    todos.splice(item, 1);
    todo.done = !todo.done ;
    
    todo.done ? todos.push(todo) : todos.unshift(todo);
    this.setState({
      todos: todos
    });
  }

  handleFormInput(e) {
    this.setState({value: e.target.value});
  }

  render() {
    let todos = this.state.todos.map((todos2, item) => {
      return (
          <Item key={item} value={todos2.value} done={todos2.done} onClickRemove={this.removeItem.bind(this, item)} onClickItem={this.markCompleted.bind(this, item)}/>
      );
    });

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-6 col-sm-offset-3 border m-0 p-0">
                    <h1 className="display-2 text-center"> todos</h1>
                    <form className="form-horizontal" onSubmit={this.addItem.bind(this)}>
                        <div className="input-group">
                            <input type="text" className="form-control" onChange={this.handleFormInput.bind(this)} placeholder="What needs to be done?" />
                        </div>
                    </form>

                    {todos}
                    <p className="card-text pt-2 pb-2 pl-2"><small className="text-muted">{this.state.todos.length} item left</small></p>
                </div>
            </div>
        </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));






































































































ReactDOM.render(<App />, document.querySelector('#app'));