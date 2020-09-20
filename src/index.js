import React from 'react';
import ReactDOM from 'react-dom';
import MessageField from './components/MessageField.jsx';

/* class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrMessage: ['Bottom', 'Top']
        };
    }
    addMessage = () => {
        this.setState(({arrMessage}) => {
            return {arrMessage: [...arrMessage, 'новое сообщение']}
        });
    }
    render() {
        return (
            <React.Fragment>
                <ul>
                    {
                        this.state.arrMessage.map((msg, id) => {
                            return <li key={id}>{msg}</li>
                        })
                    }
                </ul>
                <button onClick={this.addMessage}>ADD MESSAGE</button>
            </React.Fragment>
        )
    }
} */

ReactDOM.render(
    <MessageField/>
    ,
    document.getElementById('root')
);