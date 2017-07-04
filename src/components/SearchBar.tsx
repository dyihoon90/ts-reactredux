import * as React from "react";

export interface SearchProps { propName: string }
export interface SearchState { stateName: string }

export default class Searchbar extends React.Component<SearchProps, SearchState> {
	constructor(props: SearchProps) {
		super(props);
		this.state = { stateName: this.props.propName };
	}
	render() {
		return (
			// Always use state to change the value of input. state is always the SOT.
			<div>
				<input
					value={this.state.stateName}
					onChange={this.onInputChange} />
				Value of input: {this.state.stateName};
			</div>
		);
	}

	/* Arrow function carries the context forward.
	   Without it, "this" will be undefined
	*/
	onInputChange = (event: React.ChangeEvent<any>) => {
		this.setState({ stateName: event.target.value });
	}

}
