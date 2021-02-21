import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../src/apolloClient';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }: any) {
  const client = useApollo();
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
