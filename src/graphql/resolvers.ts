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
import Contrats from '@controllers/Contrats';
import Payments from '@controllers/Payment';
import TypeCLient from '@controllers/TypeCLient';
import User from '@controllers/User';
import Access from '@controllers/Access';
import Logistica from '@controllers/Logistica';
import TypeLogistica from '@controllers/TypeLogistica';

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
			const response = await new Provider().getProviders();
			console.log(response);
			return response;
		},
		warehouses: async () => {
			return await new Warehose().getWarehoses();
		},
		order: async (_, { _uid }) => {
			return await new Order().getOrderByClient(_uid);
			//console.log(response);
		},

		getOffertsAll: async () => {
			return await new Offert().getOffetsAll();
		},

		getProductsAll: async () => {
			return await new Product().getPoductAll();
		},

		directions: async (_, { uid }) => {
			return await new Client().getDirectionCLient(uid);
		},
		getOrders: async () => {
			return await new Order().getOrders();
		},
		getOrderActive: async () => {
			return await new Order().getOrdersActive();
		},
		getOrderInadctive: async () => {
			return await new Order().getOrdersInactive();
		},
		getAccess: async (_, { tokenAccess, userToken }) => {
			return await new Access().getAccessByconditional(tokenAccess, userToken);
		},
		getContrats: async () => {
			return await new Contrats().getContratos();
		},
		getPayments: async () => {
			return await new Payments().getPayments();
		},
		getUsers: async () => {
			return await new User().getUsers();
		},
		getUser: async (_, { uid }) => {
			return await new User().getUser(uid);
		},
		getClient: async (_, { uid }) => {
			return await new Client().getClient(uid);
		},
		getClients: async () => {
			const resul = await new Client().getClients();
			console.log('debug', resul);
			return resul;
		},
		getTypeClients: async () => {
			return await new TypeCLient().getTypeclients();
		},
		getTypeClient: async (_, { uid }) => {
			return await new TypeCLient().getTypeclient(uid);
		},
		getLogisticas: async () => {
			return await new Logistica().getLosgisticas();
		},
		getTypeLogisticas: async () => {
			return await new TypeLogistica().getLosgisticasusers();
		},
		getLogistica: async (_, { uid }) => {
			return await new Logistica().getLogistica(uid);
		},
		getTypeLogistica: async (_, { uid }) => {
			return await new TypeLogistica().getLogisticauser(uid);
		}
	},
	Mutation: {
		async createCategories(_, { input }) {
			let uid = await new Category(input).setCategory();
			input._uid = uid;
			return input;
		},

		async createLogistica(_, { input }) {
			return await new Logistica(input).setLogistia(input.uid);
		},

		async createTypeLogistica(_, { input }) {
			return await new TypeLogistica(input).addLogisticausers();
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
			return await new Provider(input).setProvider();
		},
		async createWarehouse(_, { input }) {
			let uid = await new Warehose(input).setWarehose();
			input._uid = uid;
			return input;
		},

		async createClient(_, { input }) {
			return await new Client(input).setClient(input.uid);
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

		async deletedCategory(_, { uid }) {
			let response = await new Category().deleteCategory(uid);
			return response;
		},

		async deletedWarehouse(_, { uid }) {
			let response = await new Warehose().deleteWarehose(uid);
			return response;
		},

		async detetedProviders(_, { uid }) {
			let response = await new Provider().deleteProvider(uid);
			return response;
		},

		async detetedOfert(_, { uid }) {
			let response = await new Offert().deletedOffert(uid);
			return response;
		},

		async deletedProduct(_, { sku }) {
			let response = await new Product().deteledPProduct(sku);
			return response;
		},
		async updateQuantity(_, { sku, quantity }) {
			const status = new Product().updateQuantity(sku, quantity);
			return status;
		},
		async createContrato(_, { input }) {
			let uid = await new Contrats(input).setContratos();
			input._uid = uid;
			return input;
		},
		async deletedContrato(_, { _uid }) {
			let response = await new Contrats().deletedContratos(_uid);
			return response;
		},
		async createPayment(_, { input }) {
			let uid = await new Payments(input).setPayments();
			input._uid = uid;
			return input;
		},
		async deletedPayment(_, { _uid }) {
			let response = await new Payments().deletedPayments(_uid);
			return response;
		},
		async createUser(_, { input }) {
			return await new User(input).AddUser();
		},
		async createAcess(_, { input }) {
			return await new Access(input).AddAcess();
		},
		async createTipoClient(_, { input }) {
			return await new TypeCLient(input).AddTypeclient();
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
		// category: async ({ category }) => {
		// 	return await new Category().getCategory(category);
		// 	// return await productsController.ControllerGraphql.getCategoryGql(
		// 	// category
		// 	// );
		// },
		user: async ({ user }) => {
			return await new User().getUser(user);
		}
	},

	Logistica: {
		user: async ({ user }) => {
			return await new User().getUser(user);
		}
	},

	Oferta: {
		product: async ({ product }) => {
			return await new Product().getProdut(product);
			// return await productsController.ControllerGraphql.getProductbyOferta(
			// product
			// );
		}
	},

	Client: {
		tipo_client: async ({ tipo_client }) => {
			return await new TypeCLient().getTypeclient(tipo_client);
		},
		user: async ({ user }) => {
			return await new User().getUser(user);
		}
	}
	// User: {
	// access: async ({ _uid }) => {
	// return await new Access().getAccessByconditional(_uid);
	// }
	// }
};
