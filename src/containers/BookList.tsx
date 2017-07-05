import * as React from "react";
import { Book } from "../reducers/reducer_books";

export interface BooksProps { books: Book[] }
export interface BooksState { term: string }

export default class BookList extends React.Component<BooksProps, any> {
	constructor(props: BooksProps) {
		super(props);
		this.state = { term: "" };
	}
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li key={book.title} className="list-group-item">{book.title}</li>
			)
		})
	}
	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		);
	}

}
