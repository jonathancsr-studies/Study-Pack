import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4op586f0kzk01yw088za3g6/master',
  cache: new InMemoryCache(),
});