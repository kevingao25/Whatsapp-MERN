import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";

function SidebarChat() {
	return (
		<div className="sidebarChat">
			<Avatar src="https://i.pinimg.com/originals/da/69/81/da69810556d7268e09c897becceb1b3c.jpg" />
			<div className="sidebarChat_info">
				<h2>Hermione</h2>
				<p>Expelliarmus</p>
			</div>
		</div>
	);
}

export default SidebarChat;
