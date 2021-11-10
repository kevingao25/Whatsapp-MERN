import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic";
import React, { useState } from "react";
import axios from "./axios";
import "./Chat.css";

function Chat({ messages }) {
	const [input, setInput] = useState("");

	const sendMessage = async (e) => {
		e.preventDefault();

		await axios.post("/messages/new", {
			message: input,
			name: "Darth Vadar",
			timestamp: "Just Now",
			received: true,
		});

		setInput("");
	};

	return (
		<div className="chat">
			<div className="chat_header">
				<Avatar src="https://i.pinimg.com/originals/da/69/81/da69810556d7268e09c897becceb1b3c.jpg"></Avatar>

				<div className="chat_headerInfo">
					<h3>Hermione</h3>
					<p>Last seen at yesterday</p>
				</div>

				<div className="chat_headerRight">
					<IconButton>
						<SearchOutlined />
					</IconButton>
					<IconButton>
						<AttachFile />
					</IconButton>
					<IconButton>
						<MoreVert />
					</IconButton>
				</div>
			</div>

			<div className="chat_body">
				{messages.map((message) => (
					<p className={`chat_message ${message.received && "chat_receiver"}`}>
						<span className="chat_name">{message.name}</span>
						{message.message}
						<span className="chat_timestamp">{message.timestamp}</span>
					</p>
				))}
			</div>

			<div className="chat_footer">
				<InsertEmoticon></InsertEmoticon>
				<form>
					<input
						value={input}
						onChange={(e) => {
							setInput(e.target.value);
						}}
						type="text"
						placeholder="Type a message"
					/>
					<button onClick={sendMessage} type="submit">
						Send a message
					</button>
				</form>
				<MicIcon />
			</div>
		</div>
	);
}

export default Chat;
