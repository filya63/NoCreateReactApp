import React from 'react';
import { uuid } from 'uuidv4';
import Message from './Message.jsx';

class MessageField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                {id: uuid(), text: 'Привет, Гость!', author: 'Bot'}
            ],
            newTextMessage: ''
        }
    }
    updateTextMessage = (event) => {
        const symbol = event.target.value;
        this.setState({newTextMessage: symbol})
        console.log(this.state)
    }
    submitForm = (event) => {
        event.preventDefault();
        this.setState({messages: [...this.state.messages, {id: uuid(), text: this.state.newTextMessage, author: 'Vladislav'}]});
        this.setState({newTextMessage: ''});
    }
/*     componentDidUpdate = (prevProps) => {
        if (this.props.messages.length !== prevProps.messages.length) {
            this.setState({messages: [...this.state.messages, {id: uuid(), text: 'А еще что-нибудь расскажи', author: 'Bot'}]});
        }
    }  */
    render = () => {
        const { messages, newTextMessage } = this.state;
        return (
            <React.Fragment>
                {messages.map(({id, text, author}) => {
                    return <Message key={id} text={text} author={author}/>
                })}
                <form>
                    <input type="text" value={newTextMessage} onChange={this.updateTextMessage} />
                    <input onClick={this.submitForm} type="submit" value="Отправить" />
                </form>
            </React.Fragment>
        )
    }
}

export default MessageField;