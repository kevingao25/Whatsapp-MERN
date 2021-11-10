import React, { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Pusher from "pusher-js";
import axios from "./axios";

function App() {
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		axios.get("/messages/sync").then((response) => {
			setMessages(response.data);
		});
	}, []);

	useEffect(() => {
		const pusher = new Pusher("301ce0770de5934b821b", {
			cluster: "mt1",
		});

		const channel = pusher.subscribe("messages");
		channel.bind("inserted", (newMessage) => {
			setMessages([...messages, newMessage]);
		});

		// Unsubscribe the listener
		return () => {
			channel.unbind_all();
			channel.unsubscribe();
		};
	}, [messages]);

	console.log(messages);

	return (
		<div className="app">
			<div className="app_body">
				<Sidebar></Sidebar>
				<Chat messages={messages} />
			</div>
		</div>
	);
}

export default App;
