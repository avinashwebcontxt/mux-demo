import { Fragment } from "react";
import MuxPlayer from "@mux/mux-player-react";
import ChangeRole from "../changeRole/changeRole";

export default function Attendee() {

    return (
        <Fragment>
            <ChangeRole />
            <div className="MuxPlayer">
                <MuxPlayer
                    streamType="ll-live"
                    playbackId="eCp93dUqkp23hh9YRuK4Ub8LhQJJtp4sMKO029MP01ujs"
                    metadata={{
                        video_id: 'video-id-123456',
                        video_title: 'Test Live Stream',
                        viewer_user_id: Math.random().toString(),
                    }}
                    default-hidden-captions
                    controls
                    autoPlay
                    muted
                />
            </div>
        </Fragment>
    );
}