import * as React from "react";
import * as ReactDOM from "react-dom";
import * as YTSearch from "youtube-api-search";
import VideoListItem from "./VideoListItem"

export interface VideoListProps { videos: YTSearch.IVideoResponse[], onVideoSelect: (video: YTSearch.IVideoResponse) => any };

export default class VideoList extends React.Component<VideoListProps, any> {
	constructor(props: VideoListProps) {
		super(props);
	}
	render() {
		// take the "videos" property from this VideoList, and map it to an array of videoListItems
		const videoListItems = this.props.videos.map((video) => {
			return <VideoListItem
				onVideoSelect={this.props.onVideoSelect}
				key={video.etag}
				video={video} />
		})
		return (
			<ul className="col-md-4 list-group">
				{videoListItems}
			</ul>
		)
	}
}
