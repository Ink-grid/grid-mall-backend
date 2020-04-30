/** @format */
// query for inkmarket firestore
//import productsController from '@controllers/productsController';
import Product from '@controllers/Product';
import Category from '@controllers/Category';
import Offert from '@controllers/Offert';
import Provider from '@controllers/Provider';
import Warehose from '@controllers/Warehose';
import Client from '@controllers/Client';
import Order from '@controllers/Order';

async function forEach(array, callback, thisArg?) {
	const promiseArray = [];
	for (let i = 0; i < array.length; i++) {
		if (i in array) {
			const p = Promise.resolve(array[i]).then(currentValue => {
				return callback.call(thisArg || this, currentValue, i, array);
			});
			promiseArray.push(p);
		}
	}
	await Promise.all(promiseArray);
}

export const resolvers = {
	Query: {
		categories: async () => {
			return await new Category().getCategories();
		},
		products: async (_, { category, limit, after }) => {
			return await new Product().getProducts(category, limit, after);
		},
		ofertas: async (_, { category, limit, after }) => {
			return await new Offert().getOfferts(category, limit, after);
		},
		providers: async () => {
			return await new Provider().getProviders();
		},
		warehouses: async () => {
			return await new Warehose().getWarehoses();
		},
		client: async (_, { _uid }) => {
			return await new Client().getClient(_uid);
		},
		order: async (_, { _uid }) => {
			return await new Order().getOrderByClient(_uid);
			//console.log(response);
		},

		getProductsAll: async () => {
			return await new Product().getPoductAll();
		},

		directions: async (_, { uid }) => {
			return await new Client().getDirectionCLient(uid);
		},
		getOrders: async () => {
			return await new Order().getOrders();
		}
	},
	Mutation: {
		async createCategories(_, { input }) {
			let uid = await new Category(input).setCategory();
			input._uid = uid;
			return input;
		},

		async createProduct(_, { input }) {
			input.observers = 0;
			let uid = await new Product(input).setProduct();
			input.sku = uid;
			return input;
		},
		async createOfertas(_, { input }) {
			let uid = await new Offert(input).setOffert();
			input._uid = uid;
			return input;
		},
		async createProviders(_, { input }) {
			let uid = await new Provider(input).setProvider();
			input.ruc = uid;
			return input;
		},
		async createWarehouse(_, { input }) {
			let uid = await new Warehose(input).setWarehose();
			input._uid = uid;
			return input;
		},

		async createClient(_, { input }) {
			const status = await new Client(input).addClient(input._uid);
			if (status) {
				return input;
			} else {
				return {};
			}
		},

		async createDirection(_, { input }) {
			let uid = await new Client().setDirectionCLient(input);
			input._uid = uid;
			return input;
		},
		async createOrder(_, { input }) {
			let uid = await new Order(input).setOrder();
			input._uid = uid;
			return input;
		},
		async updateQuantity(_, { sku, quantity }) {
			const status = new Product().updateQuantity(sku, quantity);
			return status;
		}
	},

	Category: {
		products: async ({ _uid }) => {
			return await new Product().getProducts(_uid);
		}
	},

	Product: {
		category: async ({ category }) => {
			return await new Category().getCategory(category);
			// return await productsController.ControllerGraphql.getCategoryGql(
			// category
			// );
		},
		warehouse: async ({ warehouse }) => {
			console.log(warehouse);
			return await new Warehose().getWarehose(warehouse);
			// return await productsController.ControllerGraphql.getWarehouseGql(
			// warehouse
			// );
		}
	},

	Order: {
		products: async ({ products }) => {
			// [*] create new array conten products
			let newproducts = [];

			// [*] foreach asyn for get product by sku
			await forEach(products, async element => {
				const product = await new Product().getProdut(element.sku);
				if (product) {
					newproducts.push({
						product: product,
						quantity: element.quantity,
						price: element.price
					});
				}
			});
			return newproducts;
		},

		direction: async ({ direction }) => {
			return await new Client().getDIrection(direction);
		},

		client: async ({ client }) => {
			return await new Client().getClient(client);
		}
	},

	Providers: {
		category: async ({ category }) => {
			return await new Category().getCategory(category);
			// return await productsController.ControllerGraphql.getCategoryGql(
			// category
			// );
		}
	},

	Oferta: {
		product: async ({ product }) => {
			return await new Product().getProdut(product);
			// return await productsController.ControllerGraphql.getProductbyOferta(
			// product
			// );
		}
	}
};
