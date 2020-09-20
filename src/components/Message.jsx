import React from 'react';

const Message = (props) => {
    return (
        <React.Fragment>
            <span><strong>{props.author}:</strong></span>
            <div>{props.text}</div>
            <hr/>
        </React.Fragment>
    )
}

export default Message;