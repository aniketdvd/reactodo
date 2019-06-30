import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}style={{ display: 'flex' }}>
                    <input style={{ flex: '10', padding: '20px' }}type="text" name="title" placeholder="add a new todo..." value={this.state.title} onChange={this.onChange}/>
                    <input type="submit" value="submit" style={{ flex: '1' }}/>
                </form>
            </div>
        )
    }
}

export default AddTodo;