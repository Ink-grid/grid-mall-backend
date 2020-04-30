/** @format */
// controllers for inkmarket backend Api rest and Graphql
import productModel from '@models/productModels';

const ControllerApiRest = {
	async getCategoryALl(rq, res) {
		try {
			let response = await productModel.getCategories('categorys');
			if (response) {
				const data = [];
				response.forEach(ele => {
					data.push(ele.data());
				});

				res.json({ status: true, message: 'list category', data: data });

				return;
			}
		} catch (error) {
			console.log(error);
			res.json({ status: false, message: '404 not found' });
		}
	}
};

const ControllerGraphql = {
	async getCategoriesGql() {
		try {
			let response = await productModel.getCategories('categorys');
			if (response) {
				const data = [];
				response.forEach(ele => {
					data.push(ele.data());
				});
				return data;
			}
		} catch (error) {
			console.log(error);
		}
	},
	async getProductsGql() {
		try {
			let response = await productModel.getProducts('products');
			if (response) {
				const data = [];
				response.forEach(ele => {
					data.push(ele.data());
				});
				return data;
			}
		} catch (error) {
			console.log(error);
		}
	},
	async setCategoryGql(data) {
		try {
			let _uid = await productModel.setCategory('categorys', data);
			await productModel.setUid('categorys', _uid.id, '_uid');
			return _uid.id;
		} catch (error) {
			console.log(error);
		}
	},

	async setOfferGql(data) {
		try {
			let uid = await productModel.setItem('offers', data);
			await productModel.setUid('offers', uid.id, '_uid');
			return uid.id;
		} catch (error) {
			console.log(error);
		}
	},
	async getOfertCategoryPaginationGql(
		category: string,
		limit: number,
		after?: string
	) {
		let oferts = [];
		if (after) {
			let next = await productModel
				.getItemOrderbyStartAfter('offers', limit, after, '_uid')
				.get();
			if (next) {
				next.forEach(oferta => {
					oferts.push(oferta.data());
				});
				return oferts.filter(ele => ele.category === category);
			}
		}

		let paginationOferta = await productModel
			.getItemOrderbyLimit('offers', 'category', limit, category)
			.get();
		if (paginationOferta) {
			paginationOferta.forEach(ele => {
				oferts.push(ele.data());
			});

			return oferts;
		}
	},
	async getProductsPaginationGql(first: number, category: string, after?) {
		if (after) {
			var products = [];
			let next = await productModel
				.getItemOrderbyStartAfter('products', first, after, 'sku')
				.get();
			if (next) {
				//let products = [];
				next.forEach(product => {
					products.push(product.data());
				});
				return products.filter(ele => ele.category === category);
			}
		}

		let pagination = await productModel
			.getItemOrderbyLimit('products', 'category', first, category)
			.get();
		if (pagination) {
			let products = [];
			pagination.forEach(product => {
				products.push(product.data());
			});
			return products;
		}
	},
	async getCategoryGql(uid) {
		try {
			let category = await productModel.getItem('categorys', uid);
			if (category.exists) {
				return category.data();
			}
		} catch (error) {
			console.log(error);
		}
	},
	async setProductGql(data) {
		try {
			let _uid = await productModel.setItem('products', data);
			await productModel.setUid('products', _uid.id, 'sku');
			return _uid.id;
		} catch (error) {
			console.log(error);
		}
	},

	async setClientGql(data) {
		try {
			let uid = await productModel.setItem('clients', data);
			await productModel.setUid('clients', uid.id, '_uid');
			return uid.id;
		} catch (error) {
			console.log(error);
		}
	},

	async getClientsGql(_uid?: string) {
		console.log(_uid);
		if (_uid) {
			let client = await productModel.getItem('clients', _uid);
			if (client.exists) {
				return [client.data()];
			} else {
				return null;
			}
		}

		let clients = [];

		try {
			let response = await productModel.getItems('clients');
			if (response) {
				response.forEach(client => {
					clients.push(client.data());
				});
			}
		} catch (error) {
			console.log(error);
		}

		return clients;
	},

	async setProviderGql(data) {
		try {
			let uid = await productModel.setItem('providers', data);
			await productModel.setUid('providers', uid.id, 'ruc');
			return uid.id;
		} catch (error) {
			console.log(error);
		}
	},

	async setWarehouseGql(data) {
		try {
			let uid = await productModel.setItem('warehouses', data);
			await productModel.setUid('warehouses', uid.id, '_uid');
			return uid.id;
		} catch (error) {
			console.log(error);
		}
	},

	async getWarehouseGql(warehose) {
		let response = await productModel.getItem('warehouses', warehose);
		if (response.exists) {
			return response.data();
		}
	},

	async getWarehousesGql() {
		let warehouses = [];
		let response = await productModel.getItems('warehouses');
		if (response) {
			response.forEach(warehouse => {
				warehouses.push(warehouse.data());
			});
		}
		return warehouses;
	},

	async getProvidersGql() {
		try {
			let providers = [];
			let reposonse = await productModel.getItems('providers');
			if (reposonse) {
				reposonse.forEach(provider => {
					providers.push(provider.data());
				});
			}

			return providers;
		} catch (error) {
			console.log(error);
		}
	},

	async getProductbyOferta(uid) {
		try {
			let response = await productModel.getItem('products', uid);
			if (response.exists) {
				return response.data();
			}
		} catch (error) {
			console.log(error);
		}
	},

	async getProductsByCategory(uid) {
		try {
			let response = await productModel.getItemsbyUid(
				'products',
				'category',
				uid
			);
			if (response) {
				let products = [];
				response.forEach(product => {
					products.push(product.data());
				});
				return products;
			}
		} catch (error) {
			console.log(error);
		}
	}
};

export default {
	ControllerApiRest,
	ControllerGraphql // get cateroires graphql
};
