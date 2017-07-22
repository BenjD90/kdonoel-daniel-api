import { Service } from 'typedi';
import { Category } from '../categories/Category';
import { Post } from './Post';

@Service()
export class PostRepository {

	private posts = [
		new Post(1, 'post #1', 'about post #1', [new Category(1, 'People'), new Category(2, 'Technology')]),
		new Post(2, 'post #2', 'about post #2', [new Category(2, 'Technology')]),
		new Post(3, 'post #3', 'about post #3', [new Category(3, 'Politics')]),
		new Post(4, 'post #4', 'about post #4', [new Category(3, 'Politics'), new Category(4, 'Economy')]),
	];

	public findAll() {
		// here, for example you can load categories using mongoose
		// you can also return a promise here
		// simulate async with creating an empty promise
		return Promise.resolve(this.posts);
	}

	public findOne(id: number) {
		// here, for example you can load post id using mongoose
		// you can also return a promise here
		let foundPost: Post;
		this.posts.forEach((post) => {
			if (post.id === id)
				foundPost = post;
		});
		return foundPost;
	}

	public save(post: Post) {
		// here, for example you can save a post to mongodb using mongoose
		this.posts.push(post);
		return post;
	}

	public remove(id: number) {
		// here, for example you can save a post to mongodb using mongoose
		const post = this.findOne(id);
		if (post)
			this.posts.splice(this.posts.indexOf(post), 1);

		return post;
	}
}
