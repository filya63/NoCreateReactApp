import React from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrMessage: ['Bottom', 'Top']
        };
    }
    addMessage = () => {
        console.log('addNewMessage');
        this.setState(this.state, () => {
            this.state.arrMessage.push('Left');
        })
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
}

ReactDOM.render(
    <Message/>
    ,
    document.getElementById('root')
);