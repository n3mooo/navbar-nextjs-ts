import '../styles/index.scss';
import { EmptyLayout } from '@/components/layout';
import { AppPropsWithLayout } from '../models';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
