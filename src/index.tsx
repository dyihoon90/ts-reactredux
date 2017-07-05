import * as React from "react";
import * as ReactDOM from "react-dom";
import * as YTSearch from "youtube-api-search";
import { Hello } from "./components/Hello";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import _ = require("lodash");
const API_key: string = "AIzaSyCww7j5PfWCrPBfTPJokYxMaNAZitRglMw";

export interface AppState { videos: YTSearch.IVideoResponse[], selectedVideo: YTSearch.IVideoResponse };

class App extends React.Component<any, any> {
	constructor() {
		super();
		// only use this.state = "something" in constructor. subsequently, must use this.setState
		this.state = {
			videos: [],
			selectedVideo: null,
		};
		this.videoSearch("twice");
	}
	videoSearch(term: string) {
		YTSearch({ key: API_key, term }, (videos: YTSearch.IVideoResponse[]) => {
			this.setState({
				videos,
				selectedVideo: videos[0],
			});
		})

	}
	render() {
		// debounce returns a version of the function we passed in, that can only be called ever 300ms.
		const videoSearch = _.debounce((term: string) => { this.videoSearch(term) }, 300);
		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={(selectedVideo: YTSearch.IVideoResponse) => this.setState({ selectedVideo })}
					videos={this.state.videos} />
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.querySelector(".example"),
);
