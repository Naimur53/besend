import '../styles/globals.css'

import { ThemeProvider } from "@material-tailwind/react";
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
