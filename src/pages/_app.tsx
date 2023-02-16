import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Footer, Navbar } from '@elements'
import { AuthContextProvider } from '@contexts'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AuthContextProvider>
            <Head>
                <title>TechFess | By Dapa</title>
                <meta
                    name="description"
                    content="Social Media for Tech Lovers! :D"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <Navbar />
            <main className="w-full min-h-screen bg-primary">
                <Component {...pageProps} />
            </main>
            <Footer />
        </AuthContextProvider>
    )
}
