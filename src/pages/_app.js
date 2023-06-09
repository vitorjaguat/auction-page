import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <div>
      {/* --  Manifold Widgets -- */}
      {/* Connect: */}
      {/* <script
        src='https://connect.manifoldxyz.dev/2.2.4/connect.umd.js'
        async
      ></script>

      <link
        rel='stylesheet'
        href='https://connect.manifoldxyz.dev/2.2.4/connect.css'
      /> */}

      {/* Marketplace listing: */}
      {/* <script
        src='https://marketplace.manifoldxyz.dev/3.3.7/marketplace.umd.min.js'
        async
      ></script>
      <link
        rel='stylesheet'
        href='https://marketplace.manifoldxyz.dev/3.3.7/marketplace.css'
      /> */}
      <Component {...pageProps} />
    </div>
  );
}
