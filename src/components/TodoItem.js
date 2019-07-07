import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            borderRadius: '100pt',
            backgroundColor: this.props.todo.completed?'#b7aecf':'#56289c',
            color: this.props.todo.completed?'#000000':'#ffffff',
            marginTop: '20px',
            padding: '20px',
            textDecoration: this.props.todo.completed?'line-through':'none'
        }
    }

    markComplete = (e) => {
        console.log('this.props')
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div className="todo-container">
                <div style={this.getStyle()}>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
                    {title}
                    <button onClick = {this.props.deleteTodo.bind(this, id)}></button>
                </div>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todos: PropTypes.array.isRequired
}

export default TodoItem;