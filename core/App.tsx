import {useState} from 'react';
import './App.css';

interface OllamaChatMessage {
    role: 'user' | 'ollama';
    content: string;
}

function App() {
    const [message, setMessage] = useState<string>('');
    const [history, setHistory] = useState<OllamaChatMessage[]>([]);


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
