import React, { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

function App() {
	useEffect(() => {}, []);

	return (
		<div className="app">
			<div class="app_body">
				<Sidebar></Sidebar>
				<Chat></Chat>
			</div>
		</div>
	);
}

export default App;
