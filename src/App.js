import React, { Component } from 'react';

const Todo = function(props) {
    const { todo } = props;
    return <div>{todo}</div>;
};

const TodoList = function(props) {
    const { todoList } = props;
    const todoListHtml = todoList.map((todo) => <Todo todo={todo} />);
    return todoListHtml;
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { todoList: [ 1, 2 ] };
    }

    render() {
        return <TodoList todoList={this.state.todoList} />;
    }
}

export default App;
