import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <div>
      {/* --  Manifold Widgets -- */}
      {/* Connect: */}
      <script
        src='https://connect.manifoldxyz.dev/latest/connect.umd.js'
        async
      ></script>

      <link
        rel='stylesheet'
        href='https://connect.manifoldxyz.dev/latest/connect.css'
      />

      {/* Marketplace listing: */}
      <script
        src='https://marketplace.manifoldxyz.dev/3.3.3/marketplace.umd.min.js'
        async
      ></script>
      <link
        rel='stylesheet'
        href='https://marketplace.manifoldxyz.dev/3.3.3/marketplace.css'
      />
      <Component {...pageProps} />
    </div>
  );
}
