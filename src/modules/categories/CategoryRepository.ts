import { Service } from 'typedi';
import { Category } from './Category';

@Service()
export class CategoryRepository {

	private categories = [
		new Category(1, 'Society'),
		new Category(2, 'Technology'),
		new Category(3, 'Politics'),
		new Category(4, 'Economy'),
		new Category(5, 'Sports'),
	];

	public findAll() {
		// here, for example you can load categories using mongoose
		// you can also return a promise here
		// simulate async with creating an empty promise
		return Promise.resolve(this.categories);
	}

	public findOne(id: number) {
		// here, for example you can load category id using mongoose
		// you can also return a promise here
		let foundCategory: Category;
		this.categories.forEach((category) => {
			if (category.id === id)
				foundCategory = category;
		});
		return foundCategory;
	}

	public save(category: Category) {
		// here, for example you can save a category to mongodb using mongoose
		this.categories.push(category);
		return category;
	}

	public remove(id: number) {
		// here, for example you can save a category to mongodb using mongoose
		const category = this.findOne(id);
		if (category)
			this.categories.splice(this.categories.indexOf(category), 1);

		return category;
	}
}
