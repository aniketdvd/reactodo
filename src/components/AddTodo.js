import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.title === ' '){
            alert('Item can not be empty!');
        }
        else {
            this.props.addTodo(this.state.title);
            this.setState({title: ''});
        }
    }

    render() {
        return (
            <div style={{
                position: 'relative', 
                top: '-30px', 
                width: '50%', 
                margin: '0 auto',
                borderRadius: '100pt',
                background: '#ffffff',
                boxShadow: '3px 3px 10px #00000055'
            }}>
                <form onSubmit = {this.onSubmit} style={{ display: 'flex'}}>
                    <input style={{ 
                        flex: '10',
                        fontSize: '18px',
                        borderRadius: '100pt',
                        padding: '20px', 
                        border: '0',
                        color: '#56289c',
                    }}
                    type="text" required="true" 
                    name="title" 
                    placeholder="Add a new To-Do..." 
                    value={this.state.title} 
                    onChange={this.onChange}/>
                    <input type="submit" value="+" style={{ 
                        width: '40px',
                        height: '40px',
                        borderRadius: '100pt',
                        border: 0,
                        position: 'relative',
                        top: '10px',
                        right: '10px',
                        fontSize: '32px',
                        fontWeight: '100',
                        color: '#ffffff',
                        background: '#56289c'
                    }}/>
                </form>
            </div>
        )
    }
}

export default AddTodo;