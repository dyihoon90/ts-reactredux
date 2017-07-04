import * as React from "react";
import * as ReactDOM from "react-dom";
import * as YTSearch from "youtube-api-search";

export interface VideoDetailProps { video: YTSearch.IVideoResponse };

export default (props: { video: YTSearch.IVideoResponse }) => {
	if (!props.video) {
		return <div>Loading...</div>
	}
	const url = `https://youtube.com/embed/${props.video.id.videoId}`;
	return (
		<div className="video-detail col-md-8">
			<div className="embed-responive embed-reponsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				<div>{props.video.snippet.title}</div>
				<div>{props.video.snippet.description}</div>
			</div>
		</div>

	)
}

class VideoDetail extends React.Component<VideoDetailProps, any> {
	constructor(props: VideoDetailProps) {
		super(props);
	}
	render() {
		return (
			<div className="video-detail col-md-8">
				<div className="embed-responive embed-reponsive-16by9">
					<iframe className="embed-responsive-item"></iframe>
				</div>
				<div className="details">
					<div></div>
					<div></div>
				</div>
			</div>

		)
	}
}
