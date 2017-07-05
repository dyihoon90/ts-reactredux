import * as React from "react";

export interface SearchProps { onSearchTermChange: (term: string) => any }
export interface SearchState { term: string }

export default class Searchbar extends React.Component<SearchProps, SearchState> {
	constructor(props: SearchProps) {
		super(props);
		this.state = { term: "" };
	}
	render() {
		return (
			// Always use state to change the value of input. state is always the SOT.
			<div className="search-bar">
				<input
					value={this.state.term}
					onChange={(event) => this.onInputChange(event.target.value)} />
				Value of input: {this.state.term};
			</div>
		);
	}

	/* Arrow function carries the context forward.
	   Without it, "this" will be undefined
	*/
	onInputChange = (term: string) => {
		this.setState({ term });
		this.props.onSearchTermChange(term);
	}

}
