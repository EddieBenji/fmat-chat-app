import {useState} from 'react';
import './App.css';

function App() {
    const [message, setMessage] = useState('');
    const [history, setHistory] = useState([]);


    return (
        <section className="chat-container">
            <div className="chat-header">
                Chat with Ollama
            </div>
            <div className="chat-messages">
                {history.map((msg, index) => (
                    <div key={index} className={`message ${msg.role}`}>
                        {msg.content}
                    </div>
                ))}
            </div>
            <div className="chat-input-container">
                <input
                    type="text"
                    className="chat-input"
                    defaultValue={message} // make sure to update defaultValue with value prop.
                    placeholder="Type your message..."
                />
                <button className="send-button">Send</button>
            </div>
        </section>
    );
}

export default App;
