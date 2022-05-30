import { Sequelize, where } from 'sequelize';
import {
  initModels,
  product,
  order,
  orderdetail,
  productCreationAttributes,
  orderCreationAttributes,
  orderdetailCreationAttributes
} from './models/init-models';
import * as dotenv from 'dotenv';
import { ApolloServer, gql } from 'apollo-server';
import { readFileSync } from 'fs';
import { nanoid } from 'nanoid';

const typeDefs = readFileSync('./src/product.graphql').toString('utf-8');

dotenv.config();
console.log(process.env);

const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASS as string,
  {
    host: process.env.DB_HOST as string,
    dialect: 'mysql',
  }
);

initModels(sequelize);

const resolvers = {
  Query: {
    product: async () => await product.findAll(),
    order: async () => await order.findAll(),
  },
  Mutation:{
    getDetailProduct: async (_parent: any, args: any) => {
        return await product.findByPk(args.id);
      },
      createProduct: async (_parent: any, args: any) => {
        const now = new Date();
  
        const newProduct: productCreationAttributes = {
          name: args.name,
          stock: args.stock,
          price: args.price,
          created: now
        };
        return await product.create(newProduct);
      },

      updateProduct: async (_parent: any, args: any) => {
        const now = new Date();
  
        const updProduct: productCreationAttributes = {
          name: args.name,
          stock: args.stock,
          price: args.price,
          created: now
        };
        await product.update(updProduct, { where: { id: args.id } });
        const updatedData =   await product.findByPk(args.id)
        return updatedData

      },

      deleteProduct: (_parent: any, args: any) => {
        return product.destroy({ where: { id: args.id } });
      },

      createOrder: async (_parent: any, args: any) => {
        const now = new Date();
  
        const newOrder: orderCreationAttributes = {
          transcode: nanoid(),
          created: now
        };
        const res = await order.create(newOrder)

        const findProduct = await product.findByPk(args.productId)
        await product.update({stock:Number(findProduct?.stock)-args.quantity}, { where: { id: args.productId } });
        const totalPrice = Number(findProduct?.price) * args.quantity

        const newOrderDetail: orderdetailCreationAttributes = {
          productid:Number(findProduct?.id),
          quantity:args.quantity,
          price: totalPrice,
          order_id: res.id
        }
        await orderdetail.create(newOrderDetail)
        return res;
      },

      // await User.update({ lastName: "Doe" }, {
      //   where: {
      //     lastName: null
      //   }
      // });

      getDetailOrder: async (_parent: any, args: any) => {
        return await orderdetail.findByPk(args.id);
      },
      
      

  },

};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});