import React from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newMessage: 'Нормально',
            arr: []
        };
        
    }
    addMessage = () => {
        const message = document.createElement('div');
        message.textContent = this.state.newMessage;
        document.body.append(message);
    }
    render() {
        return (
            <div>
                <button onClick={this.addMessage}>Добавить сообщение</button>
            </div>
        )
    }
}

ReactDOM.render(
    <Message/>,
    document.getElementById('root')
);