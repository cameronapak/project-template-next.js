import { CssVarsProvider } from '@mui/joy/styles';
import type { AppProps } from 'next/app'
import { yvuiTheme } from '../lib/theme'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (  
    <CssVarsProvider theme={yvuiTheme}>
      <Component {...pageProps} />
    </CssVarsProvider>
  )
}

export default MyApp
