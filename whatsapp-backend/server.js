// importing
import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher";
import cors from "cors";

// app config
const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
	appId: "1294957",
	key: "301ce0770de5934b821b",
	secret: "5415e0c23a738852f162",
	cluster: "mt1",
	useTLS: true,
});

pusher.trigger("my-channel", "my-event", {
	message: "hello world",
});

// middleware
app.use(express.json());
app.use(cors());

// DB config
const connection_url =
	"mongodb+srv://admin:X5OjqVwY3ckVpePh@cluster0.g7kjh.mongodb.net/whatsappdb?retryWrites=true&w=majority";
mongoose.connect(connection_url);

const db = mongoose.connection;
db.once("open", () => {
	// Once the database is connected
	console.log("DB connected");

	const msgCollection = db.collection("messagecontents");
	const changeStream = msgCollection.watch();

	// If there is a change in database, we triggers the pusher
	changeStream.on("change", (change) => {
		if (change.operationType === "insert") {
			const messageDetails = change.fullDocument;
			pusher.trigger("messages", "inserted", {
				name: messageDetails.name,
				message: messageDetails.message,
				timestamp: messageDetails.timestamp,
				received: messageDetails.received,
			});
		} else {
			console.log("Error triggering Pusher");
		}
	});
});

// api routes
app.get("/", (req, res) => res.status(200).send("Hello World, API running!"));

app.get("/messages/sync", (req, res) => {
	Messages.find((err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(data);
		}
	});
});

app.post("/messages/new", (req, res) => {
	const dbMessage = req.body;

	Messages.create(dbMessage, (err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(201).send(data);
		}
	});
});

// Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
