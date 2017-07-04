import * as React from "react";
import * as ReactDOM from "react-dom";
import * as YTSearch from "youtube-api-search";
import { Hello } from "./components/Hello";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
const API_key: string = "AIzaSyCww7j5PfWCrPBfTPJokYxMaNAZitRglMw";

class App extends React.Component<any, any> {
	constructor(props) {
		super(props);
		this.state = { videos: [] };
		YTSearch({ key: API_key, term: "surfboards" }, (videos: YTSearch.IVideoResponse[]) => {
			this.setState({ videos });
		})
	}
	render() {
		return (
			<div>
				<SearchBar propName="test" />
				<VideoList videos={this.state.videos} />
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.querySelector(".example"),
);
