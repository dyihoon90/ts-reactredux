export default function () {
	const books: Book[] = [
		{ title: "book 1" },
		{ title: "book 2" },
		{ title: "book 3" },
		{ title: "book 4" },
	]
	return books;
}

export interface Book { title: string }
