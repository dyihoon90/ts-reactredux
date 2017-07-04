import * as React from "react";
import * as ReactDOM from "react-dom";
import * as YTSearch from "youtube-api-search";

export interface VideoListItemProps { video: YTSearch.IVideoResponse, onVideoSelect: (video: YTSearch.IVideoResponse) => any };

export default class VideoListItem extends React.Component<VideoListItemProps, any> {
	constructor(props: VideoListItemProps) {
		super(props);
	}
	render() {
		const imageUrl = this.props.video.snippet.thumbnails.default.url;
		const title = this.props.video.snippet.title;
		return (
			<li onClick={() => this.props.onVideoSelect(this.props.video)} className="list-group-item">
				<div className="video-list media">
					<div className="media-left">
						<img className="media-object" src={imageUrl} />
					</div>
					<div className="media-body">
						<div className="media-heading">{title}</div>
					</div>
				</div>
			</li>
		)
	}
}
