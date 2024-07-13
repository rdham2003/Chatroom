import React, { useState, useEffect } from 'react'
import { Fragment } from 'react'

function Chatroom() {
    const [username, setUsername] = useState("")
    const [chats, setChats] = useState([]);
    const [newChat, setNewChat] = useState("");

    function handleInputChange(event){
        setNewChat(event.target.value);
    }

    function add(){
       setChats(prevChats => [...prevChats, `${username}: ${newChat}`]);
       setNewChat("");
    }

    function addEnter(event){
        if (event.key === 'Enter'){
            setChats(prevChats => [...prevChats, `${username}: ${newChat}`]);
            setNewChat("");
        }
     }

     const updateUsername = (event) => {
        if (event.key === 'Enter'){
            const newUsername = event.target.value.trim();
            if (newUsername) {
                document.getElementById("enter").style.visibility = "hidden"
                document.getElementById("chatroom_container").style.visibility = "visible"
                setUsername(newUsername);
                setUsername(newUsername);
                setChats(prevChats => [...prevChats, `${newUsername} has joined the chat`]);
        }
      }
    }

    return (
        <Fragment>
            <div id="enter">
                <h2>Enter your Username: </h2>
                <input type="text" placeholder='Ex: Johnny Appleseed' id="userBox" onKeyDown={updateUsername}/>
            </div>
            <div id="chatroom_container">
                <h1>Chatroom: </h1>
                <div id="chatroom">
                    <ul id="chats">
                        {chats.map((chat, idx) =>
                            <li key={idx}>{chat}</li>
                        )}
                    </ul>
                    <br />
                    <br />
                    <input type="text" placeholder='Type to chat...' value={newChat} onChange={handleInputChange} onKeyDown={addEnter} id="chatPost"/>
                    <button id="chatSend" onClick={add}>⬆️</button>
                </div>
            </div>
        </Fragment>
    )
}

export default Chatroom