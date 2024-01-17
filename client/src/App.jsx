import { useState, useEffect } from 'react'
import './App.css'

let SERVERNAME = "http://localhost:8080";

function App() {

  //const response = await fetch ( `${SERVERNAME}` );
  //const jsonResponse = await response.json();

  const [messages, setMessages] = useState([]);
  //setMessages([...jsonResponse]);
  //const messages = await response.json();

  useEffect(() => {
    handleGetMessages();
    }, []);

  async function handleGetMessages() {
    // make a fetch request to my api
    const response = await fetch(`${SERVERNAME}`);
    const data = await response.json();

    // set todoItems to be the response
    setMessages(data);
  }

  console.log(messages);

  return (
    <>
    <div>Hello 
    </div>
    </>
  );
}

export default App
