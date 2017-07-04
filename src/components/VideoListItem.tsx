import * as React from "react";
import * as ReactDOM from "react-dom";
import * as YTSearch from "youtube-api-search";

export interface VideoListItemProps { video: YTSearch.IVideoResponse };

export default class VideoListItem extends React.Component<VideoListItemProps, any> {
	constructor(props: VideoListItemProps) {
		console.log(props.video);
		super(props);
	}
	render() {
		return (
			<li>Video</li>
		)
	}
}
