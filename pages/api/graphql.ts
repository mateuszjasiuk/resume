import { ApolloServer } from 'apollo-server-micro';
import { resume } from 'data/data';
import { NextApiRequest, NextApiResponse } from 'next';
const typeDefs = require('./schema.graphql');

// let apolloServerHandler: (req: any, res: any) => Promise<void>;

// // https://stackoverflow.com/questions/62105419/next-js-api-routes-with-type-graphql-error-resolver-is-not-a-function
// const getApolloServerHandler = async () => {
//   if (!apolloServerHandler) {
//     // const schema = await buildSchema(typeDefs);
//     apolloServerHandler = new ApolloServer({
//       typeDefs,
//       resolvers: { Query: { me } },
//     }).createHandler({
//       path: '/api/graphql',
//     });
//   }
//   return apolloServerHandler;
// };

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   const apolloServerHandler = await getApolloServerHandler();
//   return apolloServerHandler(req, res);
// };

const handler = new ApolloServer({
  typeDefs,
  resolvers: { Query: { me } },
}).createHandler({
  path: '/api/graphql',
});

export default handler;

export const config = { api: { bodyParser: false } };

async function me() {
  return resume;
}
