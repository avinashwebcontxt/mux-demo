import { Fragment, useEffect, useState } from "react";
import { createStudio } from "@mux/studio-embed";
import "../../css/style.css";
import Upload from "../uploadFile/upload";

export default function Studio() {
	
	const [token, setToken] = useState('');

	useEffect(() => {
		if (token) {
			// token is the user's JWT you made earlier
			createStudio(token, "#my-studio-container", {
				autoSize: false, // disable the default auto sizing
				background: "https://staging-api.mixhubb.com/system/media/STAGE/audi_06.png",
				overlay: 'https://i.ibb.co/d5g8f6L/overlay.png',
				theme: {
					background: '#FFFFFF',
					accent: '#641BDC',
					error: '#FB3C4E',
				}
			}).then((studio) => {
				// you can use or store the studio instance here

				console.log("Studio Data", studio);

				studio.on('PARTICIPANT_JOINED', (onJoin) => {
					console.log("onJoin", onJoin);
				});

				studio.on('PARTICIPANT_LEFT', (onLeft) => {
					console.log("onLeft", onLeft);
				});

				studio.on('NAME_CHANGED', (onNameChange) => {
					console.log("onNameChange", onNameChange);
				});

				studio.on('BROADCAST_STARTED', (onBroadcastStarted) => {
					console.log("onBroadcastStarted", onBroadcastStarted);
				});

				studio.on('BROADCAST_ENDED', (onBroadcastEnded) => {
					console.log("onBroadcastEnded", onBroadcastEnded);
				});
			}).catch((err) => {
				console.log("err", err);
			});
		}
	}, [token]);

	useEffect(() => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ pid: Math.random().toString(), role: "host" })
		};

		fetch("getToken", requestOptions).then((res) => res.json()).then(({ data }) => {
			setToken(data.token)
		})
	}, []);

	return (
		<Fragment>
			<div id="my-studio-container"></div>
			<Upload />
		</Fragment>
	);
}