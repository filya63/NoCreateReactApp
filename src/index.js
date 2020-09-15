import React from 'react';
import ReactDOM from 'react-dom';

const Message = () => {
    return (
        <div>
            Hello, React!
        </div>
    )
}

ReactDOM.render(
    <Message />,
    document.getElementById('root')
);