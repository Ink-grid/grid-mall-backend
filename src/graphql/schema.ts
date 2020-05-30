/** @format */
// graphql inkmarket backend

import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';
const typeDesf = `
    type Query {
        categories : [Category!]!
        products(category: String!, limit: Int!, after: String): [Product!]!
        ofertas(category: String!, limit: Int!, after: String): [Oferta!]!
        providers: [Providers!]!
        warehouses: [Warehouse!]!
        contratos: [Contrats]!
        payment:[Pays]!
        directions(uid:String!): [direction!]
        getClient(uid: String): Client
        getClients: [Client]
        order(_uid: String!): [Order]
        getPayments:[Pays]
        getContrats:[Contrats]
        getOrders: [Order]
        getUsers: [User]
        getUser(uid: String!): User
        getOrderActive: [Order]
        getOrderInadctive: [Order]
        getOffertsAll: [Oferta]
        getProductsAll: [Product]
        getLogisticas: [Logistica]
        getTypeLogisticas: [TypeLogistica]
        getLogistica(uid: String!): Logistica
        getTypeLogistica(uid: String!): TypeLogistica
        getAccess(tokenAccess: String!, userToken: String!): Access   
        getTypeClients: [TypeClient!]!
        getTypeClient(uid: String!): TypeClient
    }

    type Mutation {
        createCategories(input: CategoryInput!) : Category
        createLogistica(input: LogisticaInput!): Boolean
        createTypeLogistica(input: TypeLogisticaInput): Boolean
        createProduct(input: ProductInput!) : Product
        createOfertas(input: OffertInput!): Oferta
        createProviders(input: ProvidersInput!) : Boolean
        createWarehouse(input: WarehouseInput!): Warehouse
        createClient(input: ClientInput!): Boolean
        createOrder(input: OrderInput!): Order
        createDirection(input: directionInput!) : direction
        createContrato(input: ContratsInput!) : Contrats
        createPayment(input: PaymentInput!) : Pays
        deletedPayment(_uid: String!) : Boolean 
        deletedContrato(_uid: String!) : Boolean
        deletedCategory(uid: String!) : Boolean
        deletedProduct(sku: String!): Boolean
        deletedWarehouse(uid: String!): Boolean
        detetedProviders(uid: String!): Boolean
        detetedOfert(uid: String!): Boolean
        updateQuantity(sku: String!, quantity: Int): Boolean 
        createUser(input: UserInput): Boolean
        createAcess(input: AccessInput): Boolean
        createTipoClient(input: TipoclientInput): Boolean
    }

    input CategoryInput {
            title: String!
            description: String!
            uri: String!
    }
    input ProductInput {
            category: String!
            name: String!
            warehouse: String
            price: Float!
            quantity: Int!
            unidad_media: String!
            uri: String!
            description: String   
    }

    input OffertInput {
            name: String!
            percentage: Int!
            product: String!
            category: String!
            description: String
   }

   input ProvidersInput {
           uid: String!
           ruc: String!
           user: String!
           category: [String]!
           razon_social: String!
           direction: String!
           phone: String!
           email: String!
   }

   input WarehouseInput {
           name: String!
           direction: String!
   }

   input ClientInput {
        uid: String!
	tipo_client: String!
        razon_social: String!
        user: String!
	ruc: String!
	frecuencia_compra: String!
	categories: [String]!
	lugares_compra: String!
	phone: String!
	email: String!
	direction: String!
   }

   input OrderInput {
           products: [ProducOrder]!
           direction: String!
           client: String!
           price_total: Float!
           quantity_total: Int!
   }

   input directionInput {
           avenida: String!
           distrito: String!
           referencie: String!
           client: String!
   }

   input ContratsInput {
        id_origen: String
        id_cliente: String
        id_pedido: String
        quantity: Int
   }
   input PaymentInput{
	id_cliente: String
	id_modopago: String
	igv: Float
	subtotal: Float
	total: Float
   }
   input UserInput {
        type: String!
        uri: String!
        navigate: String!
	description: String
   }

   input AccessInput {
        user: String
        icon: String
        typeIcon: String
        name: String
        route: String
   }

   input TipoclientInput {
           name: String!
           description: String!
           uri: String
   }

   input TypeLogisticaInput {
	name: String
	uri: String
	description: String
   }

   input LogisticaInput {
        uid: String
	user: String
	tipo_client: String
	razon_social: String
	ruc: String
	phone: String
	email: String
	direction: String  
   }

   type Pays{
	_uid: String
	id_cliente: String
	id_modopago: String
	igv: Float
	subtotal: Float
	total: Float
   }
   type direction {
        _uid: String
        avenida: String
        distrito: String
        referencie: String
        client: String
   }

   input ProducOrder {
        sku: String!
        quantity: Int!
        price: Float! 
   }

   type Contrats {
        _uid: String
        id_origen: String
        id_cliente: String
        id_pedido: String
        quantity: Int
   }

   type Accessdetail {
        _uid:String
        user: String
        icon: String
        typeIcon: String
        name: String
        route: String
   }

   type Access {
        client: Client 
        access: [Accessdetail]
   }

   type Order {
        _uid: String
	products: [OrdersDetail]
        price_total: Float
        direction: direction
        client: Client
        quantity_total: Int
        state: Boolean
   }

   type User {
        _uid: String!
        type: String!
        uri: String!
        navigate: String!
	description: String
   }

   type OrdersDetail {
        product: Product 
        quantity: Int
        price: Float   
   }

   type Client {
        uid: String!
        tipo_client: TypeClient!
        user: User!
	razon_social: String!
        ruc: String!
	frecuencia_compra: String!
	categories: [String]!
	lugares_compra: String!
	phone: String!
	email: String!
	direction: String!
   }

   type Warehouse {
        _uid: String
        name: String
        direction: String
   }

   type Logistica {
        uid: String
	user: User
	tipo_client: String
	razon_social: String
	ruc: String
	phone: String
	email: String
	direction: String        
   }
   type TypeLogistica{
        uid: String
	name: String
	uri: String
	description: String
   }
   type Providers {
           uid: String!
           ruc: String
           user: User
           razon_social: String
           direction: String
           category: [ String ]
           phone: String
           email: String
   }

   type TypeClient {
        _uid: String
	name: String
        description: String
        uri: String
   }
    
    type Oferta {
            _uid: String
            name: String
            percentage: Int
            description: String
            product: Product
            category: Category
    }

    type Category {
            _uid: String
            title: String
            description: String
            uri: String
            products: [Product!]!
    }

    type Product {
            sku: String
            category: Category
            warehouse: Warehouse
            name: String
            quantity: Int
            description: String
            price: Float
            unidad_media: String
            uri: String
            observers: Int   
    }
`;

export default makeExecutableSchema({
	typeDefs: typeDesf,
	resolvers: resolvers
});
