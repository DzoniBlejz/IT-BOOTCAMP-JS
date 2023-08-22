const API = "https://jsonplaceholder.typicode.com/users";

const fetchData = async () => {
	const response = await fetch(API);
	const data = await response.json();

	console.log(data);
	return data;
};

fetchData();

const API_COMMENTS = "https://jsonplaceholder.typicode.com/comments";

const fetchComments = async () => {
	const response = await fetch(API_COMMENTS);
	const comments = await response.json();
	const firstFifty = comments.filter((comment) => comment.id < 31);
	console.log(firstFifty);
	return firstFifty;
};

fetchComments();

// const input = document.querySelector("input");

// const fetchPosts = async () => {
// 	const API_POSTS = `https://jsonplaceholder.typicode.com/posts/${input.value}`;

// 	const response = await fetch(API_POSTS);
// 	const posts = await response.json();
// 	console.log(posts, "samo taj si izabrao");

// 	return posts;
// };

// input.addEventListener("change", fetchPosts);

const input = document.querySelector("input");

const body = document.querySelector("body");
const p1 = document.createElement("p");
const p2 = document.createElement("p");
const p3 = document.createElement("p");
body.appendChild(p1);
body.appendChild(p2);
body.appendChild(p3);

const fetchPosts = async (id) => {
	const API_POSTS = `https://jsonplaceholder.typicode.com/posts/${id}`;

	const response = await fetch(API_POSTS);
	const posts = await response.json();

	p1.innerHTML = posts.id;
	p2.innerHTML = posts.body;
	p3.innerHTML = posts.title;

	console.log(posts);

	return posts;
};

input.addEventListener("change", () => {
	fetchPosts(input.value);
});
