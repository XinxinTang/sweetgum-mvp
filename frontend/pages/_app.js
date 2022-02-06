import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";

import { MORALIS_APPLICATION_ID, MORALIS_SERVER } from "../keys";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider appId={MORALIS_APPLICATION_ID} serverUrl={MORALIS_SERVER}>
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
