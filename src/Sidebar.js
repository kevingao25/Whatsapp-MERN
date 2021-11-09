import React from "react";
import "./Sidebar.css";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import SidebarChat from "./SidebarChat";

function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar_header">
				<Avatar src="https://avatars.githubusercontent.com/u/68712791?v=4" />
				<div class="sidebar_headerRight">
					<IconButton>
						<DonutLargeIcon></DonutLargeIcon>
					</IconButton>
					<IconButton>
						<ChatIcon></ChatIcon>
					</IconButton>
					<IconButton>
						<MoreVertIcon></MoreVertIcon>
					</IconButton>
				</div>
			</div>

			<div class="sidebar_search">
				<div class="sidebar_searchContainer">
					<SearchIcon />
					<input placeholder="Search or start new chat" type="text" />
				</div>
			</div>

			<div class="sidebar_chats">
				<SidebarChat />
				<SidebarChat />
				<SidebarChat />
			</div>
		</div>
	);
}

export default Sidebar;
