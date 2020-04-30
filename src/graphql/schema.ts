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
        directions(uid:String!): [direction!]
        client(_uid: String): [Client!]
        order(_uid: String!): [Order]
        getOrders: [Order]
    }

    type Mutation {
        createCategories(input: CategoryInput!) : Category
        createProduct(input: ProductInput!) : Product
        createOfertas(input: OffertInput!): Oferta
        createProviders(input: ProvidersInput!) : Providers
        createWarehouse(input: WarehouseInput!): Warehouse
        createClient(input: ClientInput!): Client
        createOrder(input: OrderInput!): Order
        createDirection(input: directionInput!) : direction
        updateQuantity(sku: String!, quantity: Int): Boolean 

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
           ruc: String!
           category: String!
           razon_social: String!
           direction: String!
           phone: String!
           email: String
   }

   input WarehouseInput {
           name: String!
           direction: String!
   }

   input ClientInput {
           razon_social: String!
           _uid: String!
           phone: String!
           email: String!
           password: String!
           quantity_family: Int!
           direction: String
           
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

   type Order {
        _uid: String
	products: [OrdersDetail]
        price_total: Float
        direction: direction
        client: Client
        quantity_total: Int
        state: Boolean
   }

   type OrdersDetail {
        product: Product 
        quantity: Int
        price: Float   
   }

   type Client {
           _uid: String
           razon_social: String
           phone: String
           email: String
           quantity_family: Int
           direction: String
   }

   type Warehouse {
        _uid: String
        name: String
        direction: String
   }

   type Providers {
           ruc: String!
           razon_social: String!
           direction: String!
           category: Category
           phone: String!
           email: String

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
