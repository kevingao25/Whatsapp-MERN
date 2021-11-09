import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic";
import React from "react";
import "./Chat.css";

function Chat() {
	return (
		<div className="chat">
			<div class="chat_header">
				<Avatar></Avatar>

				<div class="chat_headerInfo">
					<h3>Room name</h3>
					<p>Last seen at ...</p>
				</div>

				<div class="chat_headerRight">
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

			<div class="chat_body">
				<p class="chat_message">
					<span class="chat_name">Sonny</span>
					This is a message
					<span class="chat_timestamp">{new Date().toUTCString()}</span>
				</p>

				<p class="chat_message chat_receiver">
					<span class="chat_name">Sonny</span>
					This is a message
					<span class="chat_timestamp">{new Date().toUTCString()}</span>
				</p>

				<p class="chat_message">
					<span class="chat_name">Sonny</span>
					This is a message
					<span class="chat_timestamp">{new Date().toUTCString()}</span>
				</p>
			</div>

			<div class="chat_footer">
				<InsertEmoticon></InsertEmoticon>
				<form>
					<input type="text" placeholder="Type a message" />
					<button type="submit">Send a message</button>
				</form>
				<MicIcon />
			</div>
		</div>
	);
}

export default Chat;
