import { Fragment, useEffect, useState } from "react";
import { createStudio } from "@mux/studio-embed";
import ChangeRole from "../changeRole/changeRole";

import "../../css/style.css";

export default function Studio({role = 'guest'}) {

	const [token, setToken] = useState('');

	useEffect(() => {
		if (token) {
			// token is the user's JWT you made earlier
			createStudio(token, "#my-studio-container", {
				// autoSize: false, // disable the default auto sizing
				background: "https://staging-api.mixhubb.com/system/media/STAGE/audi_01.png",
				overlay: 'https://i.ibb.co/d5g8f6L/overlay.png',
				theme: {
					background: '#FFFFFF',
					accent: '#641BDC',
					error: '#FB3C4E',
				}
			}).then((studio) => {
				// you can use or store the studio instance here

				// console.log("Studio Data", studio);

				studio.on('PARTICIPANT_JOINED', (onJoin) => {
					console.log("onJoin", onJoin);
				});

				studio.on('PARTICIPANT_LEFT', (onLeft) => {
					console.log("onLeft", onLeft);
				});

				studio.on('NAME_CHANGED', (onNameChange) => {
					console.log("onNameChange", onNameChange);
					// setShowUpload(false);
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
	// }, [token, storeData.pushBg]);
	}, [token]);

	useEffect(() => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ pid: Math.random().toString(), role })
		};

		fetch("getToken", requestOptions).then((res) => res.json()).then(({ data }) => {
			setToken(data.token)
		})
	}, []);

	return (
		<Fragment>
			<ChangeRole />
			<div id="my-studio-container"></div>
		</Fragment>
	);
}