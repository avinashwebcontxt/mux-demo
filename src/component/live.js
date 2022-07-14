import { Fragment } from "react";
import MuxPlayer from "@mux/mux-player-react";

export default function Live() {

	return (
		<Fragment>
            <div style={{maxWidth: '600px'}}>
                <MuxPlayer
                    streamType="live"
                    playbackId="DqNUzsaEiebkNw22akz4K2myCza62bgM7fAb36qzPFU"
                    metadata-video-title="Test Live Stream"
                    metadata-viewer-user-id="user-id-007"
                    muted="true"
                    default-hidden-captions
                />
            </div>
		</Fragment>
	);
}